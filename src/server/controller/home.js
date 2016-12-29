/**
 * GET /
 * Home page.
 */
import React from 'react';
import Application from '../../application/myApplication';

exports.index = (req, res) => {
  res.render('index', {
    Application,
    applicationName: 'myApplication',
    preloadedState: Object.assign({}, Application.preloadedState, {
      otherState: 123,
    }),
    payload: {},
    cache: true,
  });
};
