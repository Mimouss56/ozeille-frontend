# Scripts d'authentification Lighthouse - Guide de démarrage rapide

## 🚀 Configuration en 3 étapes

### Étape 1 : Créer un compte de test

1. Créez un compte utilisateur dédié aux tests
2. Activez le 2FA sur ce compte
3. **Important** : Générez et sauvegardez les backup codes

### Étape 2 : Ajouter les secrets GitHub

```bash
# Via GitHub CLI
gh secret set TEST_USER_EMAIL --body "test@votre-app.com"
gh secret set TEST_USER_PASSWORD --body "VotreMotDePasse123!"
gh secret set TEST_BACKUP_CODE --body "123456"  # Un de vos backup codes

# Ou via l'interface GitHub
# Settings → Secrets and variables → Actions → New repository secret
```

### Étape 3 : Tester localement (optionnel)

```bash
# Installer les dépendances
npm install puppeteer otpauth

# Créer .env.lighthouse.local (ne pas committer !)
cat > .env.lighthouse.local << EOF
APP_URL=http://localhost:5173
TEST_USER_EMAIL=test@votre-app.com
TEST_USER_PASSWORD=VotreMotDePasse123!
TEST_BACKUP_CODE=123456
USE_BACKUP_CODE=true
EOF

# Tester l'authentification
set -a; source .env.lighthouse.local; set +a
node lighthouse-auth.js

# Si succès, tester Lighthouse
lhci autorun
```

## ✅ Vérification

Après configuration, les workflows GitHub Actions devraient :
- ✅ S'authentifier automatiquement avant Lighthouse
- ✅ Tester les pages protégées (/dashboard, /profile, etc.)
- ✅ Générer des rapports complets avec authentification

## 🔧 Personnalisation

### Ajouter des pages à tester

Modifiez `lighthouserc.json` :

```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:5173/ma-page-protegee-1",
        "http://localhost:5173/ma-page-protegee-2"
      ]
    }
  }
}
```

### Adapter les sélecteurs CSS

Si vos formulaires ont des sélecteurs différents, modifiez `lighthouse-auth.js` :

```javascript
// Ligne ~60-65
await page.type('#votre-input-email', AUTH_CONFIG.email);
await page.type('#votre-input-password', AUTH_CONFIG.password);
await page.click('#votre-bouton-submit');
```

## 📞 Support

- Guide complet : [LIGHTHOUSE-AUTH.md](./LIGHTHOUSE-AUTH.md)
- Tests de performance : [PERFORMANCE-TESTING.md](./PERFORMANCE-TESTING.md)
- Documentation workflows : [.github/workflows/README.md](../.github/workflows/README.md)

## 🔒 Sécurité

- ❌ Ne commitez JAMAIS `.lighthouse-auth-state.json`
- ❌ Ne commitez JAMAIS `.env.lighthouse.local`
- ✅ Utilisez toujours des secrets GitHub
- ✅ Utilisez un compte de test dédié avec permissions limitées
