import React from 'react'
import { NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'

const Navbar = React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
    console.log('Home button pressed');
  },

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="2" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">Home</NavItem>
        <NavItem eventKey="2">Crawler Form</NavItem>
        <NavItem eventKey="3">Crawler Results</NavItem>
        <NavDropdown eventKey="4" title="Account" id="nav-dropdown">
          <MenuItem eventKey="4.1">Login</MenuItem>
          <MenuItem eventKey="4.2">Register</MenuItem>
          <MenuItem eventKey="4.3">Account Preferences</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Log Out</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
});

export default Navbar
