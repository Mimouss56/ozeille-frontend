# GitHub Actions Workflows - Frontend

Ce dossier contient les workflows GitHub Actions pour le projet frontend.

## Workflows disponibles

### 1. `ci-common.yml` - Workflow CI commun

**Objectif** : Workflow réutilisable pour le lint, les tests avec coverage et le build du frontend.

**Déclencheurs** : Appelé par d'autres workflows via `workflow_call`.

**Inputs** :
- `path` : Chemin vers le projet frontend (défaut : `./frontend`)
- `node-version` : Version de Node.js à utiliser (défaut : `22`)

**Étapes** :
1. Checkout du code
2. Installation de Node.js v22
3. Cache des dépendances npm
4. Installation des dépendances (`npm ci`)
5. Lint du code (`npm run lint`)
6. **Tests avec coverage** (`npm test -- --coverage`)
7. **Upload des rapports de coverage** (artifacts conservés 30 jours)
8. Build de l'application (`npm run build`)
9. **Upload des artifacts de build** (conservés 7 jours)

### 2. `develop-pipeline.yml` - Pipeline de la branche develop

**Objectif** : Pipeline d'intégration continue complet sur la branche `develop`.

**Déclencheurs** : Push sur la branche `develop`.

**Jobs** :
- **full-audit** : 
  - Lint, tests avec coverage et build
  - Scan SonarQube (si configuré)
- **performance-tests** : Tests de performance (Artillery + Lighthouse)
- **docker-build-push** : Build et push de l'image Docker
- **semantic-release** : Création de releases automatiques
- **merge-to-main** : Merge fast-forward vers `main` après un tag réussi

### 3. `performance-tests.yml` - Tests de performance

**Objectif** : Workflow réutilisable pour les tests de performance avec Artillery et Lighthouse.

**Déclencheurs** : 
- Appelé par d'autres workflows via `workflow_call`
- Déclenchement manuel (`workflow_dispatch`)

**Inputs** :
- `path` : Chemin vers le projet (défaut : `./frontend`)
- `node-version` : Version de Node.js (défaut : `22`)
- `app-url` : URL de l'application à tester (défaut : `http://localhost:5173`)

**Jobs** :

#### Artillery Load Tests
- Tests de charge et de montée en charge
- Simulation d'utilisateurs concurrents
- Mesure des temps de réponse
- Génération de rapports JSON et HTML
- **Upload des rapports Artillery** (conservés 30 jours)
- Configuration via `artillery.yml`

#### Lighthouse Performance Audit
- Audit de performance web
- Tests d'accessibilité
- Best practices
- SEO
- Génération de rapports détaillés
- **Upload des rapports Lighthouse** (conservés 30 jours)
- **Commentaire automatique sur les PRs** avec scores
- Configuration via `lighthouserc.json`

### 3. `performance-tests.yml` - Tests de performance

**Objectif** : Workflow réutilisable pour les tests de performance avec Artillery et Lighthouse.

**Déclencheurs** : 
- Appelé par d'autres workflows via `workflow_call`
- Déclenchement manuel (`workflow_dispatch`)

**Inputs** :
- `path` : Chemin vers le projet (défaut : `./frontend`)
- `node-version` : Version de Node.js (défaut : `22`)
- `app-url` : URL de l'application à tester (défaut : `http://localhost:5173`)

**Jobs** :

#### Artillery Load Tests
- Tests de charge et de montée en charge
- Simulation d'utilisateurs concurrents
- Mesure des temps de réponse
- Génération de rapports JSON et HTML
- **Upload des rapports Artillery** (conservés 30 jours)
- Configuration via `artillery.yml`

#### Lighthouse Performance Audit
- Audit de performance web
- Tests d'accessibilité
- Best practices
- SEO
- Génération de rapports détaillés
- **Upload des rapports Lighthouse** (conservés 30 jours)
- **Commentaire automatique sur les PRs** avec scores
- Configuration via `lighthouserc.json`

### 4. `pr-modules-tests.yml` - Tests sur les Pull Requests

**Objectif** : Exécuter le lint et le build lorsqu'une PR est créée ou mise à jour vers `develop`.

**Déclencheurs** : Pull requests vers `develop` avec des modifications dans :
- `frontend/src/**`
- `frontend/.github/workflows/pr-modules-tests.yml`
- `frontend/.github/workflows/ci-common.yml`

**Jobs** :
- **detect-changes** : Détecte les modules modifiés
- **test-modules** : Exécute le lint et le build via `ci-common.yml`

### 4. `pr-modules-tests.yml` - Tests sur les Pull Requests

**Objectif** : Exécuter le lint et le build lorsqu'une PR est créée ou mise à jour vers `develop`.

**Déclencheurs** : Pull requests vers `develop` avec des modifications dans :
- `frontend/src/**`
- `frontend/.github/workflows/pr-modules-tests.yml`
- `frontend/.github/workflows/ci-common.yml`

**Jobs** :
- **detect-changes** : Détecte les modules modifiés
- **test-modules** : Exécute le lint et le build via `ci-common.yml`

### 5. `release-frontend.yml` - Release sur la branche main

**Objectif** : Créer une release automatique lors d'un push sur `main`.

**Déclencheurs** : 
- Push sur la branche `main`
- Succès du workflow "Auto Merge to Develop"

**Jobs** :
- **lint-and-build** : Lint et build via `ci-common.yml`
- **release** : Création de la release avec semantic-release

### 5. `release-frontend.yml` - Release sur la branche main

**Objectif** : Créer une release automatique lors d'un push sur `main`.

**Déclencheurs** : 
- Push sur la branche `main`
- Succès du workflow "Auto Merge to Develop"

**Jobs** :
- **lint-and-build** : Lint et build via `ci-common.yml`
- **release** : Création de la release avec semantic-release

### 6. `auto-merge.yml` - Auto-merge des Pull Requests

**Objectif** : Merger automatiquement les PRs vers `develop` avec le label `automerge`.

**Déclencheurs** : PRs vers `develop` avec le label `automerge`.

**Actions** :
- Auto-merge si tous les checks sont verts
- Suppression de la branche source après merge

## Différences avec le backend

Les workflows du frontend sont adaptés de ceux du backend mais **sans** :
- ❌ Services Docker (PostgreSQL, Redis, Mailpit)
- ❌ Tests d'intégration (TI)
- ❌ Tests end-to-end (E2E)
- ❌ Génération Prisma
- ❌ Migrations de base de données

Les workflows du frontend se concentrent sur :
- ✅ Lint du code
- ✅ Tests unitaires **avec coverage**
- ✅ Build de l'application
- ✅ **Tests de performance (Artillery)**
- ✅ **Audit Lighthouse**
- ✅ **Export d'artifacts (coverage, build, rapports)**
- ✅ Vérification de la qualité du code

## Artifacts générés

### Coverage Reports
- **Nom** : `coverage-report`
- **Chemin** : `./frontend/coverage`
- **Rétention** : 30 jours
- **Contenu** : Rapports de couverture de code (HTML, JSON, LCOV)

### Build Artifacts
- **Nom** : `build-artifacts`
- **Chemin** : `./frontend/dist`
- **Rétention** : 7 jours
- **Contenu** : Build de production optimisé

### Artillery Reports
- **Nom** : `artillery-reports`
- **Chemin** : `./frontend/artillery-report.*`
- **Rétention** : 30 jours
- **Contenu** : Rapports de tests de charge (JSON + HTML)

### Lighthouse Reports
- **Nom** : `lighthouse-reports`
- **Chemin** : `./frontend/.lighthouseci`
- **Rétention** : 30 jours
- **Contenu** : Rapports d'audit de performance, accessibilité, SEO

## Configuration requise

### Secrets GitHub nécessaires

- `GITHUB_TOKEN` : Token automatique fourni par GitHub Actions
- `SONAR_TOKEN` : (Optionnel) Token pour SonarQube
- `NPM_TOKEN` : (Optionnel) Token pour semantic-release
- **`TEST_USER_EMAIL`** : Email du compte de test pour Lighthouse
- **`TEST_USER_PASSWORD`** : Mot de passe du compte de test
- **`TEST_BACKUP_CODE`** : Backup code pour contourner le 2FA

> 📖 Pour plus de détails sur la configuration de l'authentification avec 2FA, consultez [LIGHTHOUSE-AUTH.md](../../docs/LIGHTHOUSE-AUTH.md)

### Variables d'environnement

Aucune variable d'environnement spécifique n'est requise pour le frontend (contrairement au backend qui nécessite DATABASE_URL, REDIS_HOST, etc.).

### Fichiers de configuration

#### `artillery.yml` (optionnel)
Configuration pour les tests de charge Artillery. Si absent, un test basique sera généré automatiquement.

```yaml
config:
  target: "http://localhost:5173"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Normal load"
scenarios:
  - name: "Basic flow"
    flow:
      - get:
          url: "/"
```

#### `lighthouserc.json` (optionnel)
Configuration pour Lighthouse CI. Si absent, une configuration par défaut sera générée.

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:5173"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.8}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

## Structure des jobs

```
┌─────────────────────────────────────┐
│  PR vers develop                     │
└────────────┬────────────────────────┘
             │
             v
┌─────────────────────────────────────┐
│  pr-modules-tests.yml               │
│  - detect-changes                    │
│  - test-modules (ci-common)         │
│    • lint + tests + coverage        │
│    • build + artifacts              │
└─────────────────────────────────────┘


┌─────────────────────────────────────┐
│  Push sur develop                    │
└────────────┬────────────────────────┘
             │
             v
┌─────────────────────────────────────┐
│  develop-pipeline.yml               │
│                                      │
│  1. full-audit                       │
│     • lint + tests + coverage       │
│     • build + artifacts             │
│     • SonarQube scan                │
│                                      │
│  2. performance-tests (parallel)    │
│     • Artillery load tests          │
│     • Lighthouse audit              │
│                                      │
│  3. docker-build-push               │
│     • Docker build & push           │
│                                      │
│  4. semantic-release                │
│     • Version bump + release        │
│                                      │
│  5. merge-to-main (si tag)          │
│     • Fast-forward vers main        │
└─────────────────────────────────────┘


┌─────────────────────────────────────┐
│  Push sur main                       │
└────────────┬────────────────────────┘
             │
             v
┌─────────────────────────────────────┐
│  release-frontend.yml               │
│  - lint-and-build                   │
│  - release (semantic-release)       │
└─────────────────────────────────────┘
```

## Métriques et seuils de performance

### Artillery (Tests de charge)
- **Taux d'erreur maximum** : 1%
- **P95** : < 500ms (95% des requêtes)
- **P99** : < 1000ms (99% des requêtes)

### Lighthouse (Audit de performance)
- **Performance** : ≥ 80% (erreur si < 80%)
- **Accessibility** : ≥ 90% (erreur si < 90%)
- **Best Practices** : ≥ 85% (avertissement si < 85%)
- **SEO** : ≥ 80% (avertissement si < 80%)
- **First Contentful Paint** : < 2s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Total Blocking Time** : < 300ms

## Notes

- Les workflows utilisent Node.js v22
- Le cache npm est configuré pour améliorer les performances
- Les workflows sont conçus pour être réutilisables et maintenables
- Les artifacts sont conservés avec des durées appropriées (7-30 jours)
- Les tests de performance sont exécutés en parallèle pour optimiser le temps d'exécution
- Les rapports Lighthouse sont automatiquement commentés sur les PRs

## Commandes utiles

### Exécuter les tests localement avec coverage
```bash
npm test -- --coverage
```

### Installer Artillery pour tests locaux
```bash
npm install -g artillery@latest
artillery run artillery.yml
```

### Installer Lighthouse CI pour audits locaux
```bash
npm install -g @lhci/cli
lhci autorun
```

### Visualiser les rapports de coverage
```bash
npm test -- --coverage
open coverage/lcov-report/index.html
```

## Dépannage

### Les tests Artillery échouent
1. Vérifier que l'application démarre correctement avec `npm run preview`
2. Vérifier que le port 5173 est disponible
3. Ajuster les seuils dans `artillery.yml` si nécessaire

### Les tests Lighthouse échouent
1. Vérifier les scores minimums dans `lighthouserc.json`
2. Optimiser les images et les assets
3. Réduire la taille des bundles JavaScript
4. Améliorer les performances du code

### Les artifacts ne sont pas uploadés
1. Vérifier que les chemins sont corrects dans les workflows
2. S'assurer que les dossiers existent après le build
3. Vérifier les permissions GitHub Actions

