import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Navbar from '../component/Navbar';

const NavbarDefault = ({ pathname, goto }) => (
  <Navbar>
    <Navbar.List>
      <Navbar.Item>
        <Navbar.Link to={goto('/')} active={pathname === '/'}>Home</Navbar.Link>
        <Navbar.Link to={goto('/one')} active={pathname === '/one'}>One Page</Navbar.Link>
        <Navbar.Link to={goto('/two')} active={pathname === '/two'}>Second Page</Navbar.Link>
      </Navbar.Item>
    </Navbar.List>
  </Navbar>
);

const mapStateToProps = ({ location }) => ({
  pathname: location.pathname,
});
const mapDispatchToProps = dispatch => ({
  goto(pathname) {
    return function onClick(e) {
      e.preventDefault();
      dispatch(push(pathname));
    };
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarDefault);
