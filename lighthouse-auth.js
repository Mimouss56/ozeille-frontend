/**
 * Script d'authentification pour Lighthouse CI
 * Ce script se connecte à l'application avant d'exécuter les audits Lighthouse
 * Gère également le 2FA si nécessaire
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Configuration de l'authentification
 */
const AUTH_CONFIG = {
  baseUrl: process.env.APP_URL || 'http://localhost:5173',
  loginUrl: process.env.LOGIN_URL || '/login',
  email: process.env.TEST_USER_EMAIL || 'test@example.com',
  password: process.env.TEST_USER_PASSWORD || 'TestPassword123!',
  // Code 2FA ou backup code pour les tests
  twoFactorCode: process.env.TEST_2FA_CODE || null,
  // Si true, utilise un backup code au lieu d'un TOTP
  useBackupCode: process.env.USE_BACKUP_CODE === 'true',
  // Backup code pour contourner le 2FA en test
  backupCode: process.env.TEST_BACKUP_CODE || null,
  // Timeout pour l'authentification
  timeout: 30000,
};

/**
 * Authentification avec gestion du 2FA
 */
async function authenticate() {
  console.log('🔐 Démarrage de l\'authentification pour Lighthouse...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security',
    ]
  });

  try {
    const page = await browser.newPage();

    // Navigation vers la page de login
    console.log(`📍 Navigation vers ${AUTH_CONFIG.baseUrl}${AUTH_CONFIG.loginUrl}`);
    await page.goto(`${AUTH_CONFIG.baseUrl}${AUTH_CONFIG.loginUrl}`, {
      waitUntil: 'networkidle0',
      timeout: AUTH_CONFIG.timeout,
    });

    // Attendre que le formulaire de login soit visible
    await page.waitForSelector('input[type="email"], input[name="email"]', {
      timeout: 10000
    });

    console.log('✏️  Remplissage du formulaire de connexion...');

    // Remplir le formulaire de connexion
    await page.type('input[type="email"], input[name="email"]', AUTH_CONFIG.email);
    await page.type('input[type="password"], input[name="password"]', AUTH_CONFIG.password);

    // Soumettre le formulaire
    console.log('🚀 Soumission du formulaire...');
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {
        console.log('⚠️  Navigation timeout - continuons...');
      })
    ]);

    // Vérifier si le 2FA est requis
    const requires2FA = await check2FARequired(page);

    if (requires2FA) {
      console.log('🔢 2FA détecté, traitement en cours...');
      await handle2FA(page);
    }

    // Attendre que l'authentification soit complète
    await page.waitForTimeout(2000);

    // Récupérer les cookies et le localStorage
    const cookies = await page.cookies();
    const localStorage = await page.evaluate(() => {
      return Object.keys(window.localStorage).reduce((acc, key) => {
        acc[key] = window.localStorage.getItem(key);
        return acc;
      }, {});
    });

    // Sauvegarder l'état d'authentification
    const authState = {
      cookies,
      localStorage,
      timestamp: Date.now(),
    };

    const authStatePath = path.join(__dirname, '.lighthouse-auth-state.json');
    fs.writeFileSync(authStatePath, JSON.stringify(authState, null, 2));

    console.log('✅ Authentification réussie ! État sauvegardé.');
    console.log(`📝 Cookies: ${cookies.length}`);
    console.log(`📝 LocalStorage keys: ${Object.keys(localStorage).length}`);

    return authState;

  } catch (error) {
    console.error('❌ Erreur lors de l\'authentification:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

/**
 * Vérifie si le 2FA est requis
 */
async function check2FARequired(page) {
  try {
    // Attendre un court instant pour voir si la page 2FA apparaît
    await page.waitForTimeout(1000);

    // Vérifier différents sélecteurs possibles pour la page 2FA
    const selectors = [
      'input[name="code"]',
      'input[name="otp"]',
      'input[name="token"]',
      'input[placeholder*="code"]',
      '[data-testid="2fa-input"]',
      '.two-factor-input',
    ];

    for (const selector of selectors) {
      const element = await page.$(selector);
      if (element) {
        console.log(`✓ Élément 2FA trouvé: ${selector}`);
        return true;
      }
    }

    // Vérifier aussi par l'URL
    const currentUrl = page.url();
    if (currentUrl.includes('2fa') || currentUrl.includes('verify') || currentUrl.includes('otp')) {
      console.log(`✓ URL 2FA détectée: ${currentUrl}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log('ℹ️  Pas de 2FA détecté');
    return false;
  }
}

/**
 * Gère le 2FA
 */
async function handle2FA(page) {
  try {
    // Attendre le champ de code 2FA
    const codeInput = await page.waitForSelector(
      'input[name="code"], input[name="otp"], input[name="token"]',
      { timeout: 5000 }
    );

    if (AUTH_CONFIG.useBackupCode && AUTH_CONFIG.backupCode) {
      console.log('🔑 Utilisation du backup code...');
      await codeInput.type(AUTH_CONFIG.backupCode);
    } else if (AUTH_CONFIG.twoFactorCode) {
      console.log('🔢 Utilisation du code 2FA...');
      await codeInput.type(AUTH_CONFIG.twoFactorCode);
    } else {
      // Si vous utilisez TOTP, vous pouvez générer le code ici
      const totpCode = await generateTOTPCode();
      console.log('🔐 Code TOTP généré');
      await codeInput.type(totpCode);
    }

    // Soumettre le code 2FA
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 })
        .catch(() => console.log('⚠️  Navigation 2FA timeout - continuons...'))
    ]);

    console.log('✅ 2FA validé');
  } catch (error) {
    console.error('❌ Erreur lors du traitement 2FA:', error.message);
    throw error;
  }
}

/**
 * Génère un code TOTP si le secret est fourni
 */
async function generateTOTPCode() {
  const secret = process.env.TEST_2FA_SECRET;

  if (!secret) {
    throw new Error('TEST_2FA_SECRET non défini. Utilisez un backup code ou définissez le secret TOTP.');
  }

  try {
    const authenticator = require('otpauth');
    const totp = new authenticator.TOTP({
      issuer: 'YourApp',
      label: AUTH_CONFIG.email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: authenticator.Secret.fromBase32(secret),
    });

    return totp.generate();
  } catch (error) {
    console.error('❌ Erreur génération TOTP:', error.message);
    console.log('💡 Installer otpauth: npm install otpauth');
    throw error;
  }
}

/**
 * Charge l'état d'authentification sauvegardé
 */
function loadAuthState() {
  const authStatePath = path.join(__dirname, '.lighthouse-auth-state.json');

  if (!fs.existsSync(authStatePath)) {
    return null;
  }

  try {
    const data = fs.readFileSync(authStatePath, 'utf8');
    const authState = JSON.parse(data);

    // Vérifier si l'état n'est pas trop ancien (1 heure max)
    const age = Date.now() - authState.timestamp;
    if (age > 3600000) {
      console.log('⚠️  État d\'authentification expiré');
      return null;
    }

    return authState;
  } catch (error) {
    console.error('❌ Erreur lecture état auth:', error.message);
    return null;
  }
}

// Exécution si appelé directement
if (require.main === module) {
  authenticate()
    .then(() => {
      console.log('✅ Script d\'authentification terminé avec succès');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Échec de l\'authentification:', error);
      process.exit(1);
    });
}

module.exports = {
  authenticate,
  loadAuthState,
  AUTH_CONFIG,
};
