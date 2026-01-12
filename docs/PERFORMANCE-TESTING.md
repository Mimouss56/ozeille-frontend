# Guide des Tests de Performance

Ce document décrit comment configurer et exécuter les tests de performance pour le frontend.

## Table des matières

1. [Tests de charge avec Artillery](#tests-de-charge-avec-artillery)
2. [Audits de performance avec Lighthouse](#audits-de-performance-avec-lighthouse)
3. [Configuration](#configuration)
4. [Exécution locale](#exécution-locale)
5. [Interprétation des résultats](#interprétation-des-résultats)

## Tests de charge avec Artillery

Artillery est un outil moderne de tests de charge qui simule des utilisateurs concurrents.

### Pourquoi Artillery ?

- ✅ Simulation réaliste d'utilisateurs
- ✅ Scénarios complexes avec plusieurs étapes
- ✅ Métriques détaillées (latence, taux d'erreur, throughput)
- ✅ Rapports visuels et JSON

### Configuration de base

Le fichier `artillery.yml` définit les scénarios de test :

```yaml
config:
  target: "http://localhost:5173"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Montée en charge progressive"
```

### Phases de test

1. **Warm up** (60s, 5 users/s)
   - Préchauffe l'application
   - Établit une baseline

2. **Normal load** (120s, 10 users/s)
   - Charge normale d'utilisation
   - Mesure les performances standards

3. **Ramp up** (120s, 20 users/s)
   - Augmentation progressive
   - Teste la scalabilité

4. **Peak load** (60s, 50 users/s)
   - Charge maximale
   - Identifie les limites

5. **Cool down** (60s, 10 users/s)
   - Retour à la normale
   - Vérifie la récupération

### Scénarios disponibles

#### Scénario 1 : Navigation basique (70% des utilisateurs)
```yaml
- name: "Scénario utilisateur basique"
  weight: 70
  flow:
    - get:
        url: "/"
    - think: 2
    - get:
        url: "/about"
```

#### Scénario 2 : Authentification (20% des utilisateurs)
```yaml
- name: "Navigation avec authentification"
  weight: 20
  flow:
    - post:
        url: "/api/auth/login"
        json:
          email: "test@example.com"
          password: "testpassword"
```

#### Scénario 3 : Recherche (10% des utilisateurs)
```yaml
- name: "Recherche et filtrage"
  weight: 10
  flow:
    - get:
        url: "/search?q=test"
```

### Métriques importantes

- **Latency (P50, P95, P99)** : Temps de réponse
- **Error rate** : Taux d'erreurs
- **RPS (Requests Per Second)** : Débit
- **Scenarios completed** : Scénarios réussis

### Seuils recommandés

```yaml
ensure:
  maxErrorRate: 1        # Max 1% d'erreurs
  p95: 500              # 95% < 500ms
  p99: 1000             # 99% < 1s
```

## Audits de performance avec Lighthouse

Lighthouse est l'outil de Google pour auditer les performances web.

### Pourquoi Lighthouse ?

- ✅ Standards web reconnus
- ✅ Métriques Core Web Vitals
- ✅ Recommandations actionnables
- ✅ Scores d'accessibilité et SEO

### Configuration de base

Le fichier `lighthouserc.json` définit les critères :

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:5173"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.8}]
      }
    }
  }
}
```

### Catégories auditées

#### 1. Performance (≥ 80%)
- First Contentful Paint (FCP) < 2s
- Largest Contentful Paint (LCP) < 2.5s
- Total Blocking Time (TBT) < 300ms
- Cumulative Layout Shift (CLS) < 0.1
- Speed Index < 3s

#### 2. Accessibility (≥ 90%)
- Contraste des couleurs
- Attributs alt sur les images
- Labels sur les formulaires
- Navigation au clavier
- ARIA correctement utilisé

#### 3. Best Practices (≥ 85%)
- HTTPS
- Console sans erreurs
- Images optimisées
- Pas de bibliothèques vulnérables

#### 4. SEO (≥ 80%)
- Meta descriptions
- Balises title
- Robots.txt valide
- Sitemap présent
- Responsive design

### Core Web Vitals

Ces métriques sont essentielles pour l'expérience utilisateur :

| Métrique | Bon | À améliorer | Mauvais |
|----------|-----|-------------|---------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5-4s | > 4s |
| **FID** (First Input Delay) | ≤ 100ms | 100-300ms | > 300ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1-0.25 | > 0.25 |

## Configuration

### Installation des dépendances

```bash
# Artillery
npm install -g artillery@latest

# Lighthouse CI
npm install -g @lhci/cli@0.13.x

# Dépendances pour l'authentification Lighthouse
npm install puppeteer otpauth
```

### Configuration de l'authentification pour Lighthouse

Si votre application nécessite une authentification (y compris 2FA), consultez le guide complet : [LIGHTHOUSE-AUTH.md](./LIGHTHOUSE-AUTH.md)

**Résumé rapide** :
1. Créez un compte de test dédié
2. Générez des backup codes pour le 2FA
3. Ajoutez les secrets GitHub :
   - `TEST_USER_EMAIL`
   - `TEST_USER_PASSWORD`
   - `TEST_BACKUP_CODE`
4. Le script `lighthouse-auth.js` gère automatiquement l'authentification

### Configuration Artillery personnalisée

Créez `artillery.yml` à la racine du frontend :

```yaml
config:
  target: "{{ $processEnvironment.TARGET_URL }}"
  phases:
    - duration: 60
      arrivalRate: {{ $processEnvironment.ARRIVAL_RATE }}
  
scenarios:
  - name: "Mon scénario"
    flow:
      - get:
          url: "/ma-page"
```

### Configuration Lighthouse personnalisée

Créez `lighthouserc.json` :

```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:5173",
        "http://localhost:5173/about",
        "http://localhost:5173/contact"
      ],
      "numberOfRuns": 5,
      "settings": {
        "preset": "desktop"
      }
    }
  }
}
```

## Exécution locale

### Tester avec Artillery

```bash
# Test simple
artillery quick --count 10 --num 20 http://localhost:5173

# Avec configuration
artillery run artillery.yml

# Avec variables d'environnement
TARGET_URL=http://localhost:5173 ARRIVAL_RATE=15 artillery run artillery.yml

# Générer un rapport HTML
artillery run artillery.yml --output report.json
artillery report report.json --output report.html
```

### Tester avec Lighthouse

```bash
# Audit simple
lighthouse http://localhost:5173

# Avec Lighthouse CI
lhci autorun

# Mode desktop
lhci autorun --collect.settings.preset=desktop

# Avec budget personnalisé
lhci autorun --collect.numberOfRuns=5
```

## Interprétation des résultats

### Résultats Artillery

**Rapport JSON** :
- Contient toutes les métriques brutes
- Utilisable pour l'analyse automatisée
- Format : `artillery-report.json`

**Rapport HTML** :
- Visualisation graphique
- Histogrammes de latence
- Évolution temporelle
- Format : `artillery-report.html`

**Métriques clés à surveiller** :

```
Scenarios launched:  600
Scenarios completed: 595
Requests completed:  1190

Response time (ms):
  min: 12
  max: 456
  median: 45
  p95: 120
  p99: 245

Scenarios: 99.17% completed
```

### Résultats Lighthouse

**Scores** (0-100) :
- 90-100 : Excellent ✅
- 50-89 : À améliorer ⚠️
- 0-49 : Mauvais ❌

**Opportunités** :
Liste des améliorations possibles avec impact estimé

**Diagnostics** :
Problèmes identifiés à corriger

**Passed Audits** :
Ce qui fonctionne bien

## Bonnes pratiques

### Pour Artillery

1. **Commencer petit** : 5-10 users/s
2. **Augmenter progressivement** : Identifier les seuils
3. **Varier les scénarios** : Simuler un usage réel
4. **Mesurer régulièrement** : Détecter les régressions
5. **Tester en staging** : Avant la production

### Pour Lighthouse

1. **Exécuter plusieurs fois** : Moyenne sur 3-5 runs
2. **Environnement stable** : CPU et réseau constants
3. **Mode incognito** : Pas d'extensions
4. **Desktop ET mobile** : Tester les deux
5. **Suivre les Core Web Vitals** : Métriques critiques

## Optimisations courantes

### Performance

- ✅ Code splitting et lazy loading
- ✅ Compression Gzip/Brotli
- ✅ CDN pour les assets statiques
- ✅ Cache browser intelligent
- ✅ Optimisation des images (WebP, lazy loading)
- ✅ Minification JS/CSS
- ✅ Tree shaking
- ✅ Preconnect/Prefetch des ressources

### Accessibilité

- ✅ Contraste suffisant (WCAG AA)
- ✅ Alt text sur toutes les images
- ✅ Labels explicites sur les formulaires
- ✅ Navigation au clavier
- ✅ ARIA landmarks
- ✅ Focus visible

### SEO

- ✅ Meta tags appropriés
- ✅ Balises heading hiérarchiques (H1-H6)
- ✅ URLs sémantiques
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Schema.org markup

## Intégration CI/CD

Les tests de performance s'exécutent automatiquement :

1. **Sur develop** : À chaque push
2. **Sur PR** : Avant le merge
3. **Manuellement** : Via workflow_dispatch

### Artéfacts disponibles

- Coverage reports (30 jours)
- Artillery reports (30 jours)
- Lighthouse reports (30 jours)
- Build artifacts (7 jours)

### Notifications

- ❌ **Échec** : Si seuils non respectés
- ⚠️ **Warning** : Si performance dégradée
- ✅ **Succès** : Tout est OK
- 💬 **Commentaire PR** : Scores Lighthouse

## Ressources

- [Documentation Artillery](https://www.artillery.io/docs)
- [Documentation Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)
- [WebPageTest](https://www.webpagetest.org/)
