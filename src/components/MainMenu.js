import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MainMenu.css';
import StatusBarContainer from '../containers/auth/StatusBarContainer';

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
        <StatusBarContainer />
      </div>
    );
  }
}

export default MainMenu;
