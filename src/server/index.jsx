import colors from 'colors';
import errorHandler from 'errorhandler';
import app from './config';
import routes from './routes';

require('./model/posts');
require('./model/users');

const { log } = console;

// Use routers
app.use(routes);

// Catch 404 state
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

// Server | Listen to ...
app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    log(colors.red(err));
    process.exit(1);
  }
  log(colors.underline.blue(`NODE_ENV = "${app.get('env')}"`));
  log(colors.blue(`Listening at http://${app.get('host')}:${app.get('port')}`));
});
