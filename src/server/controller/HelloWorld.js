/**
 * GET /
 * Home page.
 */
import { match } from 'react-router';
import Application from '../../application/HelloWorld';

exports.home = (req, res) => {
  match({
    routes: Application.Routes,
    location: req.url,
  }, (err, redirect, routerProps) => {
    res.render('default', {
      Application,
      payload: {
        title: 'My Application',
        description: 'This is an example.',
        routerProps, // Pass Props to RouterContext.
      },
    });
  });
};

