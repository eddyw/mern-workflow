import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import Button from './component/Button';

if (module.hot) module.hot.accept();

const defaultState = Object.assign({
  counter: 0,
},
  process.env.IS_BROWSER ? window.PRELOADED_STATE : {},
);

class Application extends React.PureComponent {
  static defaultProps = { state: defaultState }
  static PropTypes = { state: PropTypes.string.isRequired }
  render() {
    const { state } = this.props;
    return (
      <div>{/* Provider */}
        Hi there!: {JSON.stringify(state)}
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
