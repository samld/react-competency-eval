# Instructions

Les tâches suivantes visent à évaluer tes compétences de base
avec React/NextJS. Pour chaque tâche, tu dois remplir les objectifs
qui sont explicitement décrits. Il existe aussi des objectifs implicites
qui sont des prérequis aux objectifs explicites. Les questions sont faites
de manière à évaluer ta capacité à les identifier et à régler des
problèmes récurrents.

## Première tâche

### Contexte

Il existe un contexte dans `./src/common/counter`. Ce contexte doit lier les
composantes `counter.tsx` et  `counter-display.tsx`. Le display est
affiché dans l'entête du site, mais le compteur est contenu dans sa
propre page.

### Compétence(s) évaluée(s)

Maîtrise du Context API de React et de sont interaction avec les
Server Components.

### Objectifs

* [ ] Ajouter la composante de `counter-display.tsx` à l'entête du site.
* [ ] Ajouter une page au site disponible via `/counter/`.
* [ ] Ajouter le compteur à cette page.
* [ ] Compléter le contexte et s'assurer que les deux puissent communiquer.

## Deuxième tâche

### Contexte

Il existe un site nommé JSONPlaceholder qui fait figure d'API externe.
En appelant la route https://jsonplaceholder.typicode.com/todos/, on
obtient une liste de TODOs.
En appelant la route https://jsonplaceholder.typicode.com/todos/1, on
obtient l'élément possédant l'ID 1 de cette liste de TODOs.

### Compétence(s) évaluée(s)

Capacité à interagir avec des APIs externes derrière le serveur
et maîtrise du routage de de NextJS.

### Objectifs

* [ ] Ajouter une page au site disponible via `/todos`.
* [ ] Obtenir en server-side la liste des TODOS et les afficher.
* [ ] Ajouter seconde une page au site disponible via `/todos/{ID}`
* [ ] Cette seconde page doit permettre d'obtenir l'id et aller chercher
  spécifiquement le TODO avec l'ID {ID} en server-side.