# Configuration de l'authentification pour les tests Lighthouse

Ce guide explique comment configurer l'authentification (avec 2FA) pour les tests Lighthouse.

## 🔐 Méthodes d'authentification supportées

### 1. Backup Codes (Recommandé pour CI/CD)

Les backup codes sont la méthode la plus simple et la plus fiable pour les tests automatisés.

**Avantages** :
- ✅ Statiques (ne changent pas toutes les 30 secondes)
- ✅ Faciles à stocker dans les secrets GitHub
- ✅ Pas de synchronisation temporelle nécessaire

**Configuration** :
1. Générez des backup codes dans votre application
2. Ajoutez-les aux secrets GitHub :
   ```
   TEST_BACKUP_CODE=123456
   ```

### 2. Secret TOTP (Pour génération dynamique)

Si vous préférez générer des codes TOTP dynamiques.

**Configuration** :
1. Récupérez le secret TOTP lors de l'activation du 2FA
2. Ajoutez-le aux secrets GitHub :
   ```
   TEST_2FA_SECRET=JBSWY3DPEHPK3PXP
   ```
3. Le script générera automatiquement les codes

### 3. Désactivation du 2FA en environnement de test

Pour les environnements de test, vous pouvez désactiver le 2FA.

**Backend - Exemple avec une variable d'environnement** :
```typescript
// auth.service.ts
async validateLogin(user: User, password: string) {
  // Validation normale...
  
  // Bypass 2FA en test
  if (process.env.NODE_ENV === 'test' && process.env.BYPASS_2FA === 'true') {
    return { requiresTwoFactor: false, user };
  }
  
  return { requiresTwoFactor: user.twoFactorEnabled, user };
}
```

## 🚀 Configuration GitHub Actions

### Secrets à ajouter

Dans GitHub → Settings → Secrets and variables → Actions :

| Secret | Description | Exemple |
|--------|-------------|---------|
| `TEST_USER_EMAIL` | Email du compte de test | `test@example.com` |
| `TEST_USER_PASSWORD` | Mot de passe du compte | `SecureP@ssw0rd!` |
| `TEST_BACKUP_CODE` | Backup code pour 2FA | `123456` |
| `TEST_2FA_SECRET` | Secret TOTP (optionnel) | `JBSWY3DPEHPK3PXP` |

### Ajout des secrets

```bash
# Via GitHub CLI
gh secret set TEST_USER_EMAIL --body "test@example.com"
gh secret set TEST_USER_PASSWORD --body "YourPassword"
gh secret set TEST_BACKUP_CODE --body "123456"
```

## 📝 Scripts disponibles

### `lighthouse-auth.js`

Script d'authentification qui :
1. Se connecte à l'application
2. Gère le 2FA (backup code ou TOTP)
3. Sauvegarde l'état d'authentification (cookies + localStorage)

**Utilisation locale** :
```bash
# Avec backup code
APP_URL=http://localhost:5173 \
TEST_USER_EMAIL=test@example.com \
TEST_USER_PASSWORD=password \
TEST_BACKUP_CODE=123456 \
USE_BACKUP_CODE=true \
node lighthouse-auth.js

# Avec TOTP
APP_URL=http://localhost:5173 \
TEST_USER_EMAIL=test@example.com \
TEST_USER_PASSWORD=password \
TEST_2FA_SECRET=JBSWY3DPEHPK3PXP \
node lighthouse-auth.js
```

### `lighthouse-puppeteer.js`

Script Puppeteer appelé par Lighthouse CI qui :
1. Charge l'état d'authentification
2. Injecte les cookies et le localStorage
3. Permet à Lighthouse d'accéder aux pages protégées

## 🔧 Configuration de l'application

### URLs à tester

Modifiez `lighthouserc.json` pour inclure vos pages protégées :

```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:5173",
        "http://localhost:5173/dashboard",
        "http://localhost:5173/profile",
        "http://localhost:5173/settings"
      ],
      "puppeteerScript": "./lighthouse-puppeteer.js"
    }
  }
}
```

### Adaptation des sélecteurs

Si vos formulaires utilisent des sélecteurs différents, modifiez `lighthouse-auth.js` :

```javascript
// Exemple de sélecteurs personnalisés
await page.type('#email-input', AUTH_CONFIG.email);
await page.type('#password-input', AUTH_CONFIG.password);
await page.click('#login-button');

// Pour le 2FA
await page.waitForSelector('#otp-input');
await page.type('#otp-input', code);
```

## 🧪 Test en local

### 1. Installer les dépendances
```bash
npm install puppeteer otpauth
```

### 2. Créer un fichier .env.lighthouse
```bash
# .env.lighthouse
APP_URL=http://localhost:5173
LOGIN_URL=/login
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=YourPassword123!
TEST_BACKUP_CODE=123456
USE_BACKUP_CODE=true
```

### 3. Exécuter l'authentification
```bash
# Charger les variables d'environnement
set -a; source .env.lighthouse; set +a

# Démarrer l'application
npm run dev &

# Attendre que l'app soit prête
sleep 5

# S'authentifier
node lighthouse-auth.js

# Exécuter Lighthouse
lhci autorun
```

### 4. Vérifier l'authentification
```bash
# Le fichier .lighthouse-auth-state.json doit être créé
cat .lighthouse-auth-state.json
```

## 🔍 Dépannage

### Problème : "Aucun état d'authentification trouvé"

**Solution** :
1. Vérifier que `lighthouse-auth.js` s'est exécuté avec succès
2. Vérifier que `.lighthouse-auth-state.json` existe
3. Relancer l'authentification

### Problème : "État d'authentification expiré"

**Solution** :
- L'authentification expire après 1 heure
- Relancez `lighthouse-auth.js`

### Problème : "2FA échoue"

**Solutions** :
1. **Backup code incorrect** :
   - Vérifiez que le code est valide
   - Générez un nouveau backup code

2. **TOTP désynchronisé** :
   - Vérifiez le secret TOTP
   - Installez `otpauth`: `npm install otpauth`
   - Vérifiez l'heure système

3. **Sélecteur non trouvé** :
   - Adaptez les sélecteurs dans `lighthouse-auth.js`
   - Ajoutez des logs pour débugger

### Problème : "Navigation timeout"

**Solutions** :
1. Augmenter le timeout :
```javascript
// lighthouse-auth.js
const AUTH_CONFIG = {
  timeout: 60000, // 60 secondes
};
```

2. Vérifier que l'application répond
3. Vérifier les sélecteurs CSS

## 🏗️ Architecture du système d'authentification

```
┌─────────────────────────────────────────────────┐
│  1. lighthouse-auth.js                          │
│     • Se connecte à l'application               │
│     • Gère le 2FA                               │
│     • Sauvegarde cookies + localStorage         │
│     • Crée .lighthouse-auth-state.json          │
└────────────┬────────────────────────────────────┘
             │
             v
┌─────────────────────────────────────────────────┐
│  2. .lighthouse-auth-state.json                 │
│     • Cookies de session                        │
│     • Tokens d'authentification                 │
│     • LocalStorage complet                      │
│     • Timestamp                                 │
└────────────┬────────────────────────────────────┘
             │
             v
┌─────────────────────────────────────────────────┐
│  3. lighthouse-puppeteer.js                     │
│     • Lit .lighthouse-auth-state.json           │
│     • Injecte cookies dans le navigateur        │
│     • Injecte localStorage                      │
│     • Lighthouse peut tester les pages          │
└─────────────────────────────────────────────────┘
```

## 📚 Ressources

- [Lighthouse CI Authentication](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/recipes/auth/README.md)
- [Puppeteer Authentication](https://pptr.dev/)
- [OTPAuth Library](https://github.com/hectorm/otpauth)

## 🔒 Sécurité

⚠️ **Important** :
- Ne commitez JAMAIS `.lighthouse-auth-state.json`
- Ne commitez JAMAIS les mots de passe en dur
- Utilisez toujours des secrets GitHub
- Utilisez un compte de test dédié
- Changez régulièrement les backup codes
- En production, utilisez des comptes avec permissions limitées
