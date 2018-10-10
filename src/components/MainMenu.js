import React, { Component } from 'react';

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Register
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;