import React, { Component } from 'react';

import api from 'utils/api-helper';

const withProducts = options => WrappedComponent => {
  return class extends Component {
    static displayName = `withProducts(${WrappedComponent.displayName || WrappedComponent.name})`;

    state = {
      isLoading: false,
      products: [],
    };

    fetchProducts = async () => {
      this.setState({ isLoading: true });
      const products = await api.getAllProducts();
      this.setState({
        isLoading: false,
        products,
      });

      return products;
    };

    componentDidMount() {
      if (options && options.isFetchImmediately) {
        this.fetchProducts();
      }
    }

    render() {
      const { isLoading, products } = this.state;

      const newProps = {
        fetchProducts: this.fetchProducts,
        isLoading,
        products,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
};

export default withProducts;
