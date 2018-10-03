import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainManu from './components/MainManu';
import RegisterContainer from './containers/RegisterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainManu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <RegisterContainer />
        </main>
      </div>
    );
  }
}

export default App;
