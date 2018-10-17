import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/login">
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
