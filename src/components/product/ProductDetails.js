import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import Loader from '../Loader';
import ProductActions from './ProductActions';

import './ProductDetails.css';

class ProductDetails extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string,
    }),
    fetchProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  }

  render() {
    const { isLoading, product } = this.props;
    const { name, category, author, description, price, imgUrl } = product;

    return (
      <React.Fragment>
        <div className="breadcrumbs">
          <div className="container">
            <ul className="list-unstyled">
              <li>
                <Link to="/products">Books</Link>
                <FA icon="angle-right" />
              </li>
              <li>
                <span>{category}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-details">
          <div className="container">
            {!isLoading && product ? (
              <React.Fragment>
                <h1>{name}</h1>
                <small className="product-details__author">by {author}</small>
                <div className="row">
                  <div className="col-4">
                    <img src={imgUrl} className="img-fluid" alt={name} />
                  </div>
                  <div className="col-8">
                    <div className="row ">
                      <div className="col-sm-4">
                        <div className="product-details__price">
                          <strong>{price + '$'}</strong>
                        </div>
                      </div>
                      <div className="col-sm-4 ml-auto">
                        <input className="form-control" type="number" defaultValue={1} />
                        <ProductActions />
                      </div>
                    </div>

                    <h3>Description</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
