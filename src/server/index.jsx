import colors from 'colors';
import app from './config/express';
import config from './config/server';

const { log } = console;
const NODE_ENV = process.env.NODE_ENV === 'production' ?
  'production' :
  'development';

// Controllers
const HelloWorld = require('./controller/HelloWorld');

// Routes
app.get('/', HelloWorld.home);

// Server Running...
app.listen(config.port, config.host, (err) => {
  if (err) {
    log(colors.red(err));
    process.exit(1);
  }
  log(colors.underline.blue(`NODE_ENV = "${NODE_ENV}"`));
  log(colors.blue(`Listening at http://${config.host}:${config.port}`));
});
