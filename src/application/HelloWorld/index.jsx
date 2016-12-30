import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import Button from './component/Button';

if (module.hot) module.hot.accept();

class Application extends React.Component {
  static preloadedState = Object.assign({
    other: 1,
  },
    process.env.IS_BROWSER ? window.PRELOADED_STATE : {},
  );
  render() {
    return (
      <div>{/* Provider */}
        Hi there!: {JSON.stringify(Application.preloadedState)}
        <Button />
      </div>
    );
  }
}

if (process.env.IS_BROWSER) {
  render(
    <Application />,
    document.getElementById('app-body'),
  );
}
export default Application;
