#!/bin/sh

# Vérifie si le dossier node_modules existe
if [ ! -d "node_modules" ]; then
  echo "Le dossier node_modules n'existe pas. Exécution de npm install..."
  npm install
  if [ $? -ne 0 ]; then
    echo "ERREUR: pnpm install a échoué. Arrêt."
    exit 1
  fi
  echo "npm install terminé."
else
  echo "Le dossier node_modules existe. Vérification des dépendances avec npm install..."
  npm install || true # Utilise || true pour éviter l'échec si des warnings mineurs surviennent
  if [ $? -ne 0 ]; then
    echo "AVERTISSEMENT: npm install a rencontré des problèmes. Le serveur pourrait ne pas démarrer correctement."
  fi
  echo "Vérification des dépendances terminée."
fi

exec npm run dev