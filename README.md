# mern-workflow
**Alpha Version (Not ready for production)**

A boilerplate for building isomorphic JavaScript applications using the MERN stack (Mongo, Express.js, React.js & Redux.js, and NodeJS).

> Give me six hours to chop down a tree and I will spend the first four sharpening the axe.

> ─ Abraham Lincoln

One of the most difficult parts of starting a project is to choose the right tools and set up a workflow. I surely spent more than 6 hours “sharpening” this boilerplate, so it can offer a simple way of writing isomorphic JavaScript applications using the MERN stack.

The primary focus of this project is to be simple, generic, and reusable.

## Quickstart

Firstly, you can fork or clone this project.
```
  git clone https://github.com/eddyw/mern-workflow.git
  cd mern-workflow/
```
Run in development:

```
  npm install
  npm start
```
Run in production:
```
  npm run build
  npm run serve
```
## Features
* Pretty Project Structure & Coding Style.
* Easy way to write SPA (Single Page Applications).
* Easy way to write MSPA (Multiple Single Page Applications).
* Write all your projects with ES6 (Server & Client).
* Traspile from ES2015 (ES6) to ES5 with babel.
* Hot Reloading.
* Support for **Aync/Await** and **Generators** functions.
* Time travelling with Redux.js. Support for [Chrome Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* Server-side Rendering.

## Available Commands

* `npm start` ─ start the server in development mode with hot-reload enabled.
* `npm run build` ─ runs `npm run clean:build`, `npm run build:client` and `npm run build:server`.
* `npm run build:client` ─ build *src/client* in production mode.
* `npm run build:server` ─ build *src/server* in production mode.
* `npm run serve` ─ start the server in production mode. (Do not forget to build first.)
* `npm run clean` ─ runs `npm run clean:build` and `npm run clean:node_modules`.
* `npm run clean:build` ─ erases *build/* folder.
* `npm run clean:node_modules` ─ erases *node_modules/* folder.
* `npm run eslint` ─ runs the JavaScript linter in *src/**/* **.
* `npm run eslint:client` ─ runs the JavaScript linter in *src/client/**/* **.
* `npm run eslint:server` ─ runs the JavaScript linter in *src/server/**/* **.

## Other Commands *(not yet implemented)*

* `npm run deploy` ─ It pushes the repository to heroku `git push heroku master`

## Project Structure

```
.
├── src
|   ├── application
|   |   ├── [ApplicationName]
|   |   |   ├── action
|   |   |   ├── component
|   |   |   ├── container
|   |   |   ├── dispatcher
|   |   |   ├── store
|   |   |   ├── style
|   |   |   ├── view
|   |   |   └── index.jsx
|   └── server
|   |   ├── config
|   |   ├── controller
|   |   ├── view
|   |   └── index.jsx
|   ├── lib
|   |   └── (Third-party libraries)
|   ├── vendor
|   |   └── (Third-party static libraries)
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── package.json
├── webpack.client.js
└── webpack.server.js
```
## About Coding Style
This project uses [Airbnb's JavaScript Coding Style](https://github.com/airbnb/javascript) and borrows [flux concepts](https://github.com/facebook/flux/tree/master/examples/flux-concepts) to write applications that use Redux. Besides that, the are a few things to take into account when writing applications using this boilerplate.

This project uses singular names for naming files. For instance, `src/application` which may contain a single page application (SPA) or multi single page applications (MSPA), and `src/server/view` which contains templates. The reason to do so is pretty simple, it just looks good when importing or requiring files in JavaScript.

```
import Application from '../application/HelloWorld'  <- It just makes sense.
```
Another point to take into account is that all SPA (single or multi) that are created in the `src/application` directory should have a valid entry point or main file called `index.jsx` in order to be automatically added by webpack to the `entry` and transpiled. Otherwise they will be ignored.

## Contributing
If you found any problem or you think something should be refactored, let me know.

## License
Copyright (c) 2016 [Eddy Wilson](https://www.linkedin.com/in/ieddyw)

MERN-WORKFLOW is released under the [MIT License](http://www.opensource.org/licenses/MIT).
