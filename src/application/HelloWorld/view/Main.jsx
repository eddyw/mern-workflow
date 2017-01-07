import React from 'react';
import {
  Container,
  Divider,
} from 'semantic-ui-react';
import Navbar from '../container/Navbar';

const Main = ({ location, children }) => (
  <div>
    <Navbar {...{ location }} />
    <Divider clearing hidden />
    <Container>
      {children}
    </Container>
  </div>
);

export default Main;
