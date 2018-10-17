import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="nav nav--left">
          <li>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
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
      </div>
    );
  }
}

export default MainMenu;
