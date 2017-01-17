import React from 'react';
import { connect } from 'react-redux';
import NavbarDefault from '../container/NavbarDefault';

const DefaultLayout = ({ children }) => (
  <div className="content-body">
    <NavbarDefault />
    <div className="container">
      {children}
    </div>
  </div>
);

export default connect()(DefaultLayout);
