import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

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
    const { name, category, price, imgUrl } = product;

    return (
      <div className="product-details">
        <div className="container">
          {!isLoading && product ? (
            <div>
              <h1>{name}</h1>
              <div>
                <img src={imgUrl} className="img-fluid" alt={name} />
              </div>
              <div>{price}</div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default ProductDetails;
