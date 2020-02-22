# Tutoriel Micro FrontEnd avec single-spa-app

## Présentation de la technologie

### Micro-frontend
L'architecture des micro-frontend est une approche du design dans lequel une application front-end est décomposée en plusieurs "micro-applications" qui vont au final marcher toutes ensembles. C'est une architecture basée sur la technologies des microservices.

Cette technologie a été développé pour répondre à certains problèmes que pouvait engendrer l'architecture frontend monolithique.

Le but de l'architecture monolithique est de construire une application, souvent utilisant la technique du single page, pouvant utiliser des microservices mais qui au fil du temps augmentent de plus en plus et devient de plus en plus difficile à maintenir.

Pour cela, l'architecture micro-frontend a été développé.

![Example architecture microfrontend](/images/verticals_headline.png)

Comme on peut le voir sur le graphique ci-dessus, cette technique permet d'avoir plusieurs équipes indépendantes, travaillant sur des fonctionnalités spécifiques d'une seule et même application, sans avoir à coder qu'un seul front end pour tout. Chaque équipe peut coder la partie du frontend dont elle a la charge et ensuite insérer cela avec le reste.

Les micro-frontend ont été créé à partir de plusieurs idées principales:
* Pour que chaque équipes puissent faire évoluer leurs technologies et leurs stack sans en avoir à référer tout le temps aux autres équipes du projet.
* Pour permettre d'isoler le code de chaque équipe et de ne pas se retrouver avec un seul gros bloc de code.
* Construire un site résistant. Ainsi même si une partie du front-end du site ne marche pas, l'ensemble du site n'est pas pour autant en panne. Le reste du site peut quand même fonctionner pendant ce temps.

### Single-spa-app
Single-spa-app est un framework de micro-frontend qui sert de router entre plusieurs frameworks front end.

Chaque sous-applications peut êter mises ensembles dans une seule et même application ou alors avoir son propre répertoire et être déployer séparement mais single-spa permet en créant des routes entre chacunes d'entres elles de les rassembler dans un seul endroit.

La plupart des frameworks frontend modernes sont supportés par single-spa, tels que React, Angular ou encore VueJS.

#### Avantages
* Les architectures micro-frontend sont plus simples à manager et à concevoir.

* Des équipes indépendantes l'une d'entre elles peuvent collaborer sur une même application front-end plus facilement

* Cela permet de faire migrer facilement une ancienne application dans une nouvelle application et de permettre aux deux de marcher simultanément. 

#### Inconvénients
* Les phases de test peuvent se révéler plus compliqués à mettre en place du fait de la différence des langages utilisés et du nombre d'applications différentes crées.

* Il est aussi plus compliqué de débugger ou de trouver la source d'un problème à travers toute l'application

* Il peut aussi exister des problèmes de version entre toutes les différentes technologies utilisées.

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
