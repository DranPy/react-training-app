import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import Loader from '../Loader';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import './ProductsList.css';

class ProductsList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { isLoading, products } = this.props;

    return (
      <div className="products-list">
        <div className="container">
          <h1>
            Products
            <button className="products-list__btn-add btn btn-success rounded-circle">
              <FA icon="plus" />
            </button>
          </h1>
          <ul className="row list-unstyled">
            {!isLoading && products ? (
              products.map(product => <ProductItem key={product.id} product={product} />)
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsList;
