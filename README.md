🌤️ Application Météo en Temps Réel – README

Cette application web permet d’afficher la météo d’une ville en temps réel grâce à l’API OpenWeather.
Elle a été conçue pour être simple, rapide, intuitive et responsive.

🎯 Objectif du projet

L’objectif est de proposer une interface permettant à l’utilisateur de saisir une ville et d’obtenir immédiatement :

La température actuelle

La vitesse du vent

L’état du ciel (pluie, ciel dégagé, nuages…)

Le nom de la ville détectée par l’API

Des icônes dynamiques en fonction des conditions météo

Un mode clair / sombre activé par un bouton

Le design est basé sur une grille responsive, assurant un affichage agréable sur mobile comme sur ordinateur.

🛠️ Technologies utilisées

HTML5 pour la structure de la page

CSS3 pour la mise en forme et la disposition en grille

JavaScript pour la logique et les requêtes API

OpenWeather API pour les données météo

Icônes SVG personnalisées pour représenter la météo, la température et le vent

🔑 Ajout de la clé API OpenWeather

Pour que l’application fonctionne, il est nécessaire d’obtenir une clé API.
Voici les étapes :

Se rendre sur le site officiel : openweathermap.org

Créer un compte (gratuit)

Aller dans la section “My API Keys”

Copier votre clé personnelle

Ouvrir le fichier JavaScript du projet

Remplacer la clé existante par votre propre clé API

Après cette étape, l’application pourra interroger l’API OpenWeather et afficher les résultats en temps réel.

▶️ Guide de lancement

Pour lancer le projet, il suffit de suivre ces étapes :

Télécharger tous les fichiers du projet (HTML, CSS, JS et dossiers d’icônes).

Ouvrir le fichier index.html dans un navigateur web moderne.

Entrer une ville dans le champ prévu à cet effet.

Cliquer sur le bouton GO pour afficher la météo.

L’application fonctionne immédiatement sans installation supplémentaire.

Pour un fonctionnement optimal, il est également possible d’utiliser un serveur local comme :

Live Server de Visual Studio Code

Un serveur simple via Python

Mais cela reste facultatif.

📂 Structure du projet

Le projet est composé des éléments suivants :

Un fichier HTML principal

Un fichier CSS contenant le design et la grille

Un fichier JavaScript contenant la logique de récupération et d’affichage de la météo

Un dossier d’icônes (météo, température, vent) utilisées pour représenter les conditions

🔍 Fonctionnement interne

Lorsqu’une ville est saisie :

L’application envoie une requête à l’API OpenWeather

Les données reçues (température, vent, état du ciel) sont analysées

Les éléments de l’interface sont mis à jour

Les icônes changent automatiquement selon :

La météo (pluie, soleil, nuage, etc.)

Le niveau de température (chaud, froid, normal)

La force du vent

L’application est conçue pour être rapide et légère, avec une mise à jour fluide de l’écran.

📜 Licence

Ce projet est libre d’utilisation à des fins éducatives, personnelles ou expérimentales.
Il peut être modifié, amélioré ou adapté selon vos besoins.

🤝 Contributions

Toutes les propositions d’amélioration sont les bienvenues.
Les pistes possibles incluent :

Historique des villes recherchées

Auto-complétion des villes

Choix du thème (couleurs personnalisées)

Version installable en application mobile (PWA)