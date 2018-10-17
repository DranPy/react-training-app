import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainMenu from './components/MainMenu';
import RegistrationContainer from './containers/RegistrationFormContainer';
import LoginContainer from './containers/LoginFormContainer';
import ProductsListContainer from './containers/product/ProductsListContainer';
import ProductDetailsContainer from './containers/product/ProductDetailsContainer';
import NotFound from './components/NotFound';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainMenu />
          </header>
          <main>
            <Switch>
              <Route exact path="/register" component={RegistrationContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route exact path="/products" component={ProductsListContainer} />
              <Route path="/products/:id" component={ProductDetailsContainer} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
