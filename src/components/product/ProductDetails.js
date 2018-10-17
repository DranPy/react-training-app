import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    // product: PropTypes.shape({
    //   id: PropTypes.number.isRequired,
    //   name: PropTypes.string.isRequired,
    //   category: PropTypes.string,
    //   price: PropTypes.string,
    //   imgUrl: PropTypes.string,
    // }),
    product: PropTypes.object,
    fetchProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  }

  render() {
    const { name, category, price, imgUrl } = this.props.product;

    return (
      <div className="product-details">
        <div className="container">
          <h1>{name}</h1>
          <div>
            <img src={imgUrl} className="img-fluid" alt={name} />
          </div>
          <div>{price}</div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
