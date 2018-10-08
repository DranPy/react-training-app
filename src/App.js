import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainManu from  './components/MainManu';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainManu />
        </header>
        <main>
          <RegistrationContainer />  
        </main>
      </div>
    );
  }
}

export default App;
