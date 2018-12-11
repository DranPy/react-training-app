import React, { Component } from 'react';
import ProductFormContainer from '../containers/product/ProductFormContainer';
import { createProduct } from '../store/product/actions';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { FormMode } from '../utils/enums';
import normalize from '../utils/normalize';

class ProductAddPage extends Component {
  handleSubmit = values => {
    const product = normalize(values);
    return this.props.createProduct(product);
  };

  handleSubmitSuccess = (values, dispatch) => dispatch(reset('productForm'));

  render() {
    return (
      <ProductFormContainer
        mode={FormMode.Add}
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleSubmitSuccess}
      />
    );
  }
}

const mapDispatchToProps = {
  createProduct,
};

export default connect(
  null,
  mapDispatchToProps
)(ProductAddPage);
