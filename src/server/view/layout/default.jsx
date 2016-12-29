import React, { PropTypes } from 'react';

export default class DefaultLayout extends React.Component {
  static defaultProps = { application: '' }
  static PropTypes = { application: PropTypes.string.isRequired }
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="app-body" dangerouslySetInnerHTML={{ __html: this.props.application }} />
        </body>
      </html>
    );
  }
}
