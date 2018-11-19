import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AuthMenu extends Component {
  render() {
    return (
      <ul className="nav nav--right">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default AuthMenu;
