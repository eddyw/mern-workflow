/**
 * GET /
 * Home page.
 */
import { match } from 'react-router';
import Application, { Routes, store } from '../../application/HelloWorld';

exports.home = (req, res) => {
  // Check if the url matches and choose the route to render.
  match({
    routes: Routes,
    location: req.url,
  }, (err, redirect, props) => {
    res.render('home', {
      Application, // The application itself.
      payload: {
        title: 'My Application', // Title as it appears in browser.
        description: 'This is an example.', // Description.
        props, // Pass all these properties to RouterContext.
        store, // Gets store.getState() and saves it in window.PRELOAD_STATE.
      },
      cache: true,
    });
  });
};

