import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Container,
  Icon,
  Menu,
  Header,
} from 'semantic-ui-react';

const Navbar = ({ location, goto }) => (
  <Menu attached stackable inverted>
    <Container>
      <Menu.Item>
        <Header as="h4" inverted color="teal">
          <Icon loading={false} name="circle outline" />
          <Header.Content>
            Hello World
            <Header.Subheader>
              Simple Web Application
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Item onClick={goto('/')} active={location.pathname === '/'}>
        Home
      </Menu.Item>
      <Menu.Item onClick={goto('/about')} active={location.pathname === '/about'}>
        About
      </Menu.Item>
    </Container>
  </Menu>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  goto(path) {
    return () => dispatch(push(path));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
