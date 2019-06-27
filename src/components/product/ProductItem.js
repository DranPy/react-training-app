import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductActions from './ProductActions';

class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.object,
    onDelete: PropTypes.func,
  };

  render() {
    const { product, onDelete } = this.props;
    const { id, name, price, imgUrl } = product;
    const currency = this.props.currency || '$';

    return (
      <li className="col-3">
        <div className="product-item">
          <Link to={`/products/${id}`}>
            <img src={imgUrl} className="product-item__img img-fluid rounded" alt={name} />
          </Link>
          <div>
            <h5 className="product-item__name">
              <Link to={`/products/${id}`}>{name}</Link>
            </h5>
            <div className="product-item__price">
              <strong>{price + currency}</strong>
            </div>
          </div>
          <ProductActions productId={id} productName={name} onDelete={onDelete} />
        </div>
      </li>
    );
  }
}

export default ProductItem;
