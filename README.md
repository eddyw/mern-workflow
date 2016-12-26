# mern-workflow 
#### (In Development | Kind of works | It may break)

It is a tool for building isomorphic applications using the MERN stack (Mongo, Express.js, React.js & Redux.js and Node).

## Quickstart

```
  git clone https://github.com/eddyw/mern-workflow.git
  cd mern-workflow/
  npm install
  npm start
```
## Features
* Pretty Project Structure
* Hot Reloading.
* Traspile from ES2015 (ES6) to ES5 with babel.
* Support for **Aync/Await** and **Generators** functions when targeting ES5.
* Time travelling with Redux.js. Support for [Chrome Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* Using **ReactDOMServer** for generating static .html files on the server side (`renderToStaticMarkup`).

## Available Commands

* `npm start` ─ a simpler way of calling `npm run start:dev`.
* `npm run start:dev` ─ start the server in development mode with hot-reload enabled.
* `npm run start:prod` ─ start the server in production mode. **NOTE: Run before `npm run build`.**
* `npm run build` ─ runs `npm run clean`, `npm run build:client` and `npm run build:server`.
* `npm run build:client` ─ build *src/client* in production mode.
* `npm run build:server` ─ build *src/server* in production mode.
* `npm run clean` ─ runs `npm run clean:build` and `npm run clean:node_modules`.
* `npm run clean:build` ─ erases *build/* folder.
* `npm run clean:node_modules` ─ erases *node_modules/* folder.
* `npm run eslint` ─ runs the JavaScript linter in *src/**/* **.
* `npm run eslint:client` ─ runs the JavaScript linter in *src/client/**/* **.
* `npm run eslint:server` ─ runs the JavaScript linter in *src/server/**/* **.

## Other Commands *(Not yet implemented)*
* `npm run test`
* `npm run jest`
* `npm run deploy`

## Project Structure

```
.
├── src
|   ├── client
|   |   └── (it's not completed)
|   └── server
|   |   └── (it's not completed)
├── .babelrc
├── .eslintrc.json
├── package.json
├── server.js
├── webpack.config.dev.js
├── webpack.config.prod.client.js
└── webpack.config.prod.server.js
```

## License
Copyright (c) 2016 [Eddy Wilson](https://www.linkedin.com/in/ieddyw)

MERN-WORKFLOW is released under the [MIT License](http://www.opensource.org/licenses/MIT).
