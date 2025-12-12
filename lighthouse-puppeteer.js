/**
 * Script Puppeteer pour Lighthouse CI avec authentification
 * Ce script est appelé par Lighthouse pour chaque URL testée
 * Il injecte l'état d'authentification avant chaque audit
 */

const fs = require('fs');
const path = require('path');

/**
 * Setup Puppeteer avec l'état d'authentification
 * Cette fonction est appelée par Lighthouse CI avant chaque audit
 * 
 * @param {import('puppeteer').Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  console.log(`\n🔍 Configuration Lighthouse pour: ${context.url}`);

  // Charger l'état d'authentification
  const authStatePath = path.join(__dirname, '.lighthouse-auth-state.json');

  if (!fs.existsSync(authStatePath)) {
    console.warn('⚠️  Aucun état d\'authentification trouvé. Exécutez d\'abord lighthouse-auth.js');
    console.warn('   Les pages protégées ne seront pas accessibles.');
    return;
  }

  let authState;
  try {
    const data = fs.readFileSync(authStatePath, 'utf8');
    authState = JSON.parse(data);
  } catch (error) {
    console.error('❌ Erreur lecture état auth:', error.message);
    return;
  }

  // Vérifier l'âge de l'authentification
  const age = Date.now() - authState.timestamp;
  const ageMinutes = Math.floor(age / 60000);

  if (age > 3600000) { // 1 heure
    console.warn(`⚠️  État d'authentification expiré (${ageMinutes} minutes)`);
    console.warn('   Ré-exécutez lighthouse-auth.js pour vous authentifier à nouveau');
    return;
  }

  console.log(`✓ État d'authentification valide (${ageMinutes} minutes)`);

  // Ouvrir une nouvelle page
  const page = await browser.newPage();

  try {
    // Définir les cookies
    if (authState.cookies && authState.cookies.length > 0) {
      await page.setCookie(...authState.cookies);
      console.log(`✓ ${authState.cookies.length} cookie(s) injectés`);
    }

    // Naviguer vers l'URL pour établir le contexte
    await page.goto(context.url, {
      waitUntil: 'domcontentloaded',
      timeout: 10000,
    }).catch(() => {
      console.log('⚠️  Première navigation timeout (normal)');
    });

    // Injecter le localStorage
    if (authState.localStorage && Object.keys(authState.localStorage).length > 0) {
      await page.evaluate((storage) => {
        Object.entries(storage).forEach(([key, value]) => {
          window.localStorage.setItem(key, value);
        });
      }, authState.localStorage);
      console.log(`✓ ${Object.keys(authState.localStorage).length} clé(s) localStorage injectées`);
    }

    // Attendre un peu pour que l'état soit bien pris en compte
    await page.waitForTimeout(500);

    console.log('✅ Configuration de l\'authentification terminée\n');

  } catch (error) {
    console.error('❌ Erreur configuration auth:', error.message);
  } finally {
    await page.close();
  }
};

/**
 * Fonction utilitaire pour vérifier si une page nécessite une authentification
 */
async function requiresAuth(url) {
  const protectedPaths = [
    '/dashboard',
    '/profile',
    '/settings',
    '/admin',
    '/account',
    '/private',
  ];

  return protectedPaths.some(path => url.includes(path));
}

module.exports.requiresAuth = requiresAuth;
