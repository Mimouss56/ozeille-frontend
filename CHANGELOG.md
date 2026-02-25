# [1.6.0](https://github.com/Mimouss56/ozeille-frontend/compare/v1.5.0...v1.6.0) (2026-02-25)


### Bug Fixes

* corriger l'appel de la fonction handlePeriodChange dans TransactionPage ([bcd15ed](https://github.com/Mimouss56/ozeille-frontend/commit/bcd15edd40bd9eb8e1de410e073b833ee263097c))
* corriger la gestion des variables non définies dans le script d'audit Storybook ([0452ef4](https://github.com/Mimouss56/ozeille-frontend/commit/0452ef404068d6098241f803292c085f172545a0))
* corriger le calcul des compteurs pour les composants manquants, supprimés et OK dans l'audit Storybook ([53e0590](https://github.com/Mimouss56/ozeille-frontend/commit/53e0590b38791109db7ecbf2badfa3819123feab))
* corriger une erreur de syntaxe dans le script d'audit Storybook ([3c26a3e](https://github.com/Mimouss56/ozeille-frontend/commit/3c26a3ea9b2b7562b982a44707c873adf3303bf1))
* supprimer la partie de déploiement et de nettoyage dans le workflow Storybook ([4e944a7](https://github.com/Mimouss56/ozeille-frontend/commit/4e944a7836518fb902c836782915fbd59bb8b3c8))


### Features

* ajouter FilterableColumnMeta et supprimer FilterSelect ([fe32351](https://github.com/Mimouss56/ozeille-frontend/commit/fe32351340aa02785c2cfe8c2c674851fb97b8c2))
* ajouter la carte de catégorie avec affichage des transactions et mise à jour des appels de récupération des catégories ([7e5dc28](https://github.com/Mimouss56/ozeille-frontend/commit/7e5dc280669eb8d0f51c4b2bb8866062ed045080))
* ajouter la gestion des filtres 'from' et 'to' dans les transactions ([fbf7353](https://github.com/Mimouss56/ozeille-frontend/commit/fbf735347cc84d65ba19be942e18d2b826c6e9a0))
* ajouter un shebang pour le script d'audit dans le workflow Storybook ([aabacc0](https://github.com/Mimouss56/ozeille-frontend/commit/aabacc04e6f36333732c6023157995d1eb20a76f))
* ajuster les importations et corriger la gestion des filtres dans TransactionPage ([9e501b2](https://github.com/Mimouss56/ozeille-frontend/commit/9e501b2f57d64fda9f31720c3b851748d536e3ca))
* améliorer l'audit des composants Storybook avec vérification stricte des stories manquantes et des composants supprimés ([d4cdc3e](https://github.com/Mimouss56/ozeille-frontend/commit/d4cdc3e1a33d9bcb84b8dc59eb1288274d60e966))
* améliorer le filtrage des transactions avec des types de filtres généralisés et des options de filtrage pour les colonnes ([7181812](https://github.com/Mimouss56/ozeille-frontend/commit/7181812811fb44439fbd8a1d3410bda6a6c41895))
* optimiser l'audit des composants Storybook en vérifiant uniquement les fichiers .tsx et en améliorant la gestion des résultats ([49a03ac](https://github.com/Mimouss56/ozeille-frontend/commit/49a03acbc26dd0c41649f516f3db08c49e1b8821))
* optimiser l'audit des fichiers dans Storybook pour ne vérifier que les fichiers .tsx ([e55f292](https://github.com/Mimouss56/ozeille-frontend/commit/e55f292d5f7d13f8750527152cdc57326f0e114c))
* refactor le filtrage des colonnes et supprimer les composants CategoryCard ([1e74319](https://github.com/Mimouss56/ozeille-frontend/commit/1e74319f81ddbe7670cd62b206517e9b47aeb660))
* réintroduire le filtre de transaction aligné avec le backend et ajuster le type ColumnDef dans DataTable ([34850b9](https://github.com/Mimouss56/ozeille-frontend/commit/34850b9d076fe8304b3e3bb0f3871498d9e1e0de))

# [1.5.0](https://github.com/Mimouss56/ozeille-frontend/compare/v1.4.1...v1.5.0) (2026-02-18)


### Bug Fixes

* ajouter un état de chargement aux modaux de catégorie et de transaction ([dce62ba](https://github.com/Mimouss56/ozeille-frontend/commit/dce62ba6c2fd161c0cba2f71212542a551e7dec4))
* améliorer la validation du montant dans le schéma de transaction ([0f8c89e](https://github.com/Mimouss56/ozeille-frontend/commit/0f8c89e074768e8c622b4d97c048bf092f10d550))
* corriger le texte du bouton et ajuster la grille des budgets ([970bf4d](https://github.com/Mimouss56/ozeille-frontend/commit/970bf4db8743347156148c6d9bc8beb62becbb5a))


### Features

* ajouter des filtres pour les transactions et créer de nouveaux composants de filtre ([6e336ad](https://github.com/Mimouss56/ozeille-frontend/commit/6e336ad98ad15124ff09276bc5947deed3d841b5))
* ajouter des métadonnées de filtrage pour les colonnes et mettre à jour le placeholder du filtre de montant ([5dbef7f](https://github.com/Mimouss56/ozeille-frontend/commit/5dbef7feaca61b1c6e23931db4e804fa7e9a678b))
* ajouter des options de filtrage et améliorer la mise en page du tableau ([0740487](https://github.com/Mimouss56/ozeille-frontend/commit/0740487afa68d0b7e990319faf2372abc158c743))
* ajouter des variantes et des styles au composant InputColor ([79248f3](https://github.com/Mimouss56/ozeille-frontend/commit/79248f331c67e15201de98d3b7f8a2b0fba310d9))
* ajouter le filtrage automatique des colonnes et la gestion des colonnes monétaires ([3e96cd0](https://github.com/Mimouss56/ozeille-frontend/commit/3e96cd07d72ae50b71f302842886415bf9086f2e))
* refactor DataTable component to support automatic column filtering and add new filter components ([dd05767](https://github.com/Mimouss56/ozeille-frontend/commit/dd05767244b091e8d39580dd66b57be9415c4f5d))

## [1.4.1](https://github.com/Mimouss56/ozeille-frontend/compare/v1.4.0...v1.4.1) (2026-02-08)


### Bug Fixes

* head title ([78b2fe9](https://github.com/Mimouss56/ozeille-frontend/commit/78b2fe9a692542571b41e2795e0dcdb33289a779))

# [1.4.0](https://github.com/Mimouss56/ozeille-frontend/compare/v1.3.7...v1.4.0) (2026-02-08)


### Bug Fixes

* commenter la configuration du job SonarQube dans le workflow CI ([27172e0](https://github.com/Mimouss56/ozeille-frontend/commit/27172e09671ab6de702e7070453838960b106b10))
* commenter les étapes de test et de rapport de couverture dans le workflow CI ([b7aed37](https://github.com/Mimouss56/ozeille-frontend/commit/b7aed37f6b88a5ce4706ba394fca77b7f9bb8233))
* corriger la détection des fichiers TypeScript dans le workflow Storybook ([2164fbf](https://github.com/Mimouss56/ozeille-frontend/commit/2164fbfc6168b62b73e3e3a703ebcedf38c04861))
* corriger la mise en forme et le chemin d'accès dans le workflow PR Frontend ([d21c99c](https://github.com/Mimouss56/ozeille-frontend/commit/d21c99c928b7bf34811c0afcd4c476a3ad14828d))
* modifier les permissions de contenu dans le workflow Storybook ([2c61452](https://github.com/Mimouss56/ozeille-frontend/commit/2c61452011004fe0b1745260e0a239981baeaa12))
* renommer l'état d'erreur dans les histoires du composant EmptyCard ([b596b94](https://github.com/Mimouss56/ozeille-frontend/commit/b596b943b40922f272c32b9e1282d98a8fbccaec))
* uniformiser la syntaxe des chemins ignorés dans le workflow PR ([8c6e09b](https://github.com/Mimouss56/ozeille-frontend/commit/8c6e09b32a86e99483c8d9ce1dce034c7a963407))


### Features

* add budget summary functionality; integrate summary data into Dashboard and FinanceChart components ([212a00f](https://github.com/Mimouss56/ozeille-frontend/commit/212a00ffa54625c03d5898f38e175da52dc01804))
* add BudgetCard and related hooks for budget management ([d851a26](https://github.com/Mimouss56/ozeille-frontend/commit/d851a26126ca2bce7e81235899a1b996c4541cb5))
* add semantic release and CI/CD workflows ([c7378e6](https://github.com/Mimouss56/ozeille-frontend/commit/c7378e628c1575e947e0676c15ee8e23169c8fb7))
* ajouter la pagination par date dans le Dashboard; mettre à jour le chargement des résumés mensuels ([6c6744c](https://github.com/Mimouss56/ozeille-frontend/commit/6c6744cd6f71536856fc713f39298f50af4f60f1))
* ajouter un job SonarQube pour l'analyse de code ([f49db59](https://github.com/Mimouss56/ozeille-frontend/commit/f49db59918a72a1828c9d151fabd9c38e35527f5))
* enhance ToggleTheme component with dynamic icon weights and colors; adjust Checkbox label rendering ([34ae069](https://github.com/Mimouss56/ozeille-frontend/commit/34ae0696daca8b989b4e70de5ed7b96b1dcb3671))
* update story titles for Navigation and EmptyCard components; add OzeilleLoader component and its stories ([f466fc9](https://github.com/Mimouss56/ozeille-frontend/commit/f466fc90bf495c3eb30648ef1435175ba333dafa))
