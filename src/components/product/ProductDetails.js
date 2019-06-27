import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import Loader from '../Loader';
import ProductActions from './ProductActions';

import './ProductDetails.scss';

class ProductDetails extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
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
    const { id, name, categories, authors, description, price, imgUrl } = product;

    return (
      <Fragment>
        <div className="product-details">
          <div className="container">
            {!isLoading && product ? (
              <Fragment>
                <div className="breadcrumbs">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/products">Books</Link>
                      <FA icon="angle-right" />
                    </li>
                    <li>
                      <span>
                        {categories && categories.map(category => category.name).join(', ')}
                      </span>
                    </li>
                  </ul>
                </div>

                <h1>{name}</h1>
                <small className="product-details__author">
                  by {authors && authors.map(author => author.name).join(', ')}
                </small>
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
                        <ProductActions productId={id} />
                      </div>
                    </div>

                    <h3>Description</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductDetails;
