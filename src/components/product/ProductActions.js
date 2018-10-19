import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

class ProductActions extends Component {
  static propTypes = {
    onBuy: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
  };

  render() {
    return (
      <div className={`btn-group ${this.props.className}`}>
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
    );
  }
}

export default ProductActions;
