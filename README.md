# Tutoriel Micro FrontEnd avec single-spa-app

## Présentation de la technologie

## Objectifs du tutoriel

### Contexte

### Description

### Résultat/ Connaissances attendues après l'exécution

## Configuration et étapes à suivre

### Si l'on crée un projet single-spa de 0

#### Installation du framework single-spa-app

* Pour créer un nouveau projet à l'aide de single-spa-app, il faut tout d'abord créer un nouveau projet.

* Il faut ensuite initialiser un package.json à l'aide de la commande:
`npm init -y`

* Il faut ensuite installer les dépendances de single-spa-app et des autres frameworks que l'on souhaiterais utiliser dans le projet (ici react et vue) à l'aide de la commande:
`npm install react react-dom single-spa single-spa-react single-spa-vue`

* On peut ensuite installer les dépendances supplémentaires dont on aura potentiellement besoin pendant e projet (type babel ou webpack).

* Il faut ensuite enregistrer nos différents applications qui vont fonctionner en même temps dans le fichier single-spa.config.js en utilisant la fonction registerApplication() qui prends trois arguments.
  * Le nom de l'application
  * Le point d'entrée de l'application
  * La fonction d'activité (qui nous dit où charger l'application)

#### Création de l'application

* Ensuite on peut coder chacune de nos application séparement.

* Une fois que nos applications sont codés, on crée un fichier index.html à la racine de notre application principale. Ce fichier va appeler chacunes des sous-applications dans des div différentes.

* Enfin, pour lancer l'application, il suffit de faire la commande suivante: 
`npm start`

* L'application sera disponible sur l'url:
http://localhost:8080/

### Si on clone ou importe un projet existant

* Pour pouvoir lancer le projet sur sa machine, il faut d'abord faire la commande suivante qui va installer toutes les dépendances nécessaires:
`npm install`

* Ensuite, pour lancer l'application, il suffit de faire la commande suivante: 
`npm start`

* L'application sera disponible sur l'url:
http://localhost:8080/

### Explication de l'application de démonstration

Cette application est composée de 3 sous-applications:
* Une application codée en React
* Deux applications codées en VueJS

Les applications peuvent être vu ensemble ou séparement grâce aux urls suivantes:
* http://localhost:8080/react
* http://localhost:8080/vue

#### Application React

#### Première application vue

#### Deuxième application vue
