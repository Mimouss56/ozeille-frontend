# La pince Front

## Requis

- Docker
- Docker-compose

## Démarrage du projet

Pour démarrer le projet, il suffit de lancer la commande suivante :

```shell
docker-compose up
```

Par défaut, le projet est accessible sur le port `5173`. Pour le surcharger, il suffit de modifier le fichier `.env`, que vous pouvez créer à partir du fichier `.env.example`.

- PORT : le port exposé sur lequel le projet front sera accessible

## Installation de dépendances

Pour installer de nouvelles dépendances, vous pouvez vous connecter directement dans le containeur avec la commande :

```shell
docker compose exec <container> sh
```

Sinon, vous pouvez installer directement avec la commande suivante :

```shell
docker compose exec <container> npm i <package>
```

ou `container` est le nom du conteneur et `package` le nom du package.