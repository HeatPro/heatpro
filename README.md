# Guide de Lancement de l'Application HeatPro Mobile

## Avant-contexte

HeatPro est une application permettant à un intervenant-technicien de consulter
l'historique d'une chaufferie grâce au scan d'un QR Code physiquement
posé sur la chaufferie. Le technicien peut également ajouter une nouvelle
intervention à cette liste, consulter son profil et afficher un QR Code à
scanner par une Hololens 2. Cette Hololens 2 permet d'afficher
les spécifications de la chaufferie sur laquelle l'intervenant travaille
afin d'avoir les mains libres lors de son intervention.

## Technologies utilisées

- Expo
- React Native
- NestJS
- MongoDB

## Prérequis

- Un Iphone (test Android non réalisé, mais devrait être compatible)
- L'application "Expo Go" à télécharger via l'App Store
- Un compte "Expo Go"
- Un ordinateur avec une version récente de npm ou yarn
- **Un ordinateur et un Iphone connecté au même réseau** (wifi, 4G...)

## Mise en place

1. Cloner le projet : https://github.com/HeatPro/heatpro.git

## Lancement

1. Ouvrir le dossier `HeatPro` à la racine du projet.
2. Ouvrir une console PowerShell, Git Bash... :
3. Réaliser les instructions suivantes :
    1. `npm install` ou `yarn install`
    2. `npx expo start` ou `turbo dev`, cela devrait lancer la compilation et l'exécution de l'application
    3. Un QR Code devrait apparaitre lors de cette étape (il faut peut-être remonter un peu par défilement)
    4. Scanner le QR Code avec l'application Appareil Photo de votre Iphone
4. A cette étape, vous allez galérer, il faudra peut-être lancer, relancer...
5. Dans le pire des cas, si ça ne marche pas, contactez-nous (cf. tout en bas). Croyez-nous, on en a souffert autant que
   vous.

## Contact

### Par mail ou sur Slack :

- Michel KADILAR - michel.kadilar@etu.unice.fr
- Louis CALAS - louis.calas@etu.unice.fr
- Anas CHHILIF - anas.chhilif@etu.unice.fr
- Saad BEIDOURI - saad.beidouri@etu.unice.fr
- Elias MERDACI - elias.merdaci@etu.unice.fr