import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import MainMenu from 'components/MainMenu';
import RegistrationContainer from 'containers/RegistrationFormContainer';
import LoginContainer from 'containers/LoginFormContainer';
import ProductsListContainer from 'containers/product/ProductsListContainer';
import ProductDetailsContainer from 'containers/product/ProductDetailsContainer';
import ProductAddPage from 'pages/ProductAddPage';
import ProductEditPage from 'pages/ProductEditPage';
import NotFound from 'components/NotFound';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { getUserToken } from 'helpers/auth/user';
import { checkUserSession } from 'store/auth/actions';

library.add(fas);

class App extends Component {
  static propTypes = {
    checkUserSession: PropTypes.func,
  };

  componentDidMount() {
    const { checkUserSession } = this.props;
    const token = getUserToken();
    if (token) {
      checkUserSession && checkUserSession(token);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App__header">
            <MainMenu />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={ProductsListContainer} />
              <Route path="/products" exact component={ProductsListContainer} />
              <Route path="/products/add" component={ProductAddPage} />
              <Route path="/products/:id/edit" exact component={ProductEditPage} />
              <Route path="/products/:id" component={ProductDetailsContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/register" component={RegistrationContainer} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  checkUserSession,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
