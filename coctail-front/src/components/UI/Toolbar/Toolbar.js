import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" exact><a>Cocktail Builder</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact>
          <NavItem>Cocktails</NavItem>
        </LinkContainer>
        <LinkContainer to="/cocktails/new" exact>
          <NavItem>New Cocktail</NavItem>
        </LinkContainer>
      </Nav>

      {user ? <UserMenu user={user} logout={logout} /> : <AnonymousMenu/>}
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;