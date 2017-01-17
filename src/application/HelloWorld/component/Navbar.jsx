import React from 'react';

const Navbar = ({ children }) => (
  <nav className="navbar">
    <div className="container">
      {children}
    </div>
  </nav>
);

Navbar.List = ({ children }) => (
  <ul className="navbar-list">
    {children}
  </ul>
);

Navbar.Item = ({ children }) => (
  <li className="navbar-item">
    {children}
  </li>
);

Navbar.Link = ({ children, active, to }) => (
  <a
    className={`navbar-link ${active ? 'active' : ''}`}
    onClick={typeof to === 'function' ? to : ''}
    href={typeof to === 'function' ? '#' : to}
  >
    {children}
  </a>
);

export default Navbar;
