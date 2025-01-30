# Instructions

The following tasks aim to assess your basic skills
with React/NextJS. For each task, you must complete the objectives
that are explicitly described. There are also implicit objectives
that are prerequisites to the explicit objectives. The questions are designed
to assess your ability to identify and solve recurring
problems.

## First task

### Context

There is a context in `./src/common/counter`. This context must link the
components `counter.tsx` and `counter-display.tsx`. The display is
displayed in the header of the site, but the counter is contained in its
own page.

### Skill(s) assessed

Mastery of the React Context API and its interaction with
Server Components.

### Objectives

* [ ] Add the `counter-display.tsx` component to the site header.
* [ ] Add a page to the site available via `/counter/`.
* [ ] Add the counter to this page.
* [ ] Complete the context and ensure that the two can communicate.

## Second task

### Context

There is a site named JSONPlaceholder that acts as an external API.
By calling the route https://jsonplaceholder.typicode.com/todos/, we
obtain a list of TODOs.
By calling the route https://jsonplaceholder.typicode.com/todos/1, we
obtain the element with ID 1 from this list of TODOs.

### Skill(s) assessed

Ability to interact with external APIs behind the server
and mastery of NextJS routing.

### Objectives

* [ ] Add a page to the site available via `/todos`.
* [ ] Obtain the list of TODOS in server-side and display them.
* [ ] Add a second page to the site available via `/todos/{ID}`
* [ ] This second page must allow to obtain the id and fetch
  specifically the TODO with the ID {ID} in server-side.