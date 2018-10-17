import React, { Component } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const { id, name, price, imgUrl } = this.props.product;
    const currency = this.props.currency || '$';

    return (
      <li className="product-item">
        <Link to={`/products/${id}`}>
          <img src={imgUrl} className="product-item__img img-fluid rounded" alt={name} />
        </Link>
        <div>
          <h5 className="product-item__name">
            <Link to={`/products/${id}`}>{name}</Link>
          </h5>
          <div className="product-item__price">{price + currency}</div>
        </div>
        <div className="product-item__actions btn-group">
          <button className="btn btn-primary" title="Buy">
            <FA icon="shopping-cart" />
          </button>
          <button className="btn btn-outline-primary" title="Remove">
            <FA icon="times-circle" />
          </button>
          <button className="btn btn-outline-primary" title="Edit">
            <FA icon="pen" />
          </button>
        </div>
      </li>
    );
  }
}

export default ProductItem;
