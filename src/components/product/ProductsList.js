import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import Loader from '../Loader';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './ProductsList.css';

class ProductsList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { isLoading, products, deleteProduct } = this.props;

    return (
      <div className="products-list">
        <div className="container">
          <h1>
            Products
            <Link
              to="/products/add"
              className="products-list__btn-add btn btn-success rounded-circle"
            >
              <FA icon="plus" />
            </Link>
          </h1>
          <ul className="row list-unstyled">
            {!isLoading && products ? (
              products.map(product => (
                <ProductItem key={product.id} onDelete={deleteProduct} product={product} />
              ))
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
