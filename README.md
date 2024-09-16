# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`
- **************************** CAHIER DE RECETTES  ***************************
Scénario 1
Given  =>  Dans la NavBar, plusieurs items
When  =>   Quand je click dessus,
Then  =>   Mène à la section clické

Scénario 2
Given   =>   Afficher le slider
When    =>   Sur la page Home
Then    =>   Affichage des slides des plus anciennes aux plus récentes. Les puces correspondent à la slide affichée


Dans la NavBar, plusieurs items
Scénario 3
Given  =>  En consultant la liste des évènements
When  =>  Lorsque je sélectionne une catégorie
Then  =>  La liste des évènements affiche uniquement les événements de la catégorie sélectionnée.

Scénario 4
Given  =>  En consultant la liste des évènements
When  =>  Sur la page Home
Then  =>  Afficher le mois durant lequel a eu lieux l'événement

Scénario 5
Given  =>  En voulant envoyer un msg
When  =>  Lorsque je soumet le formulaire
Then  =>  Afficher un msg de confirmation d'envoie

Scénario 6
Given  =>  Dans le footer
When  =>  Sur la page principal
Then  =>  Afficher une vignette avec ke dernier évenement organisé
