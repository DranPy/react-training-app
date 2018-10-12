import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainMenu from './components/MainMenu';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainMenu />
          </header>
          <main>
            <Route exact path="/register" component={RegistrationContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
