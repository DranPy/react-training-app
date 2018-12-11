import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import ProductFormContainer from '../containers/product/ProductFormContainer';
import { fetchProduct, updateProduct } from '../store/product/actions';
import { getProductForForm } from '../store/product/selectors';
import { FormMode } from '../utils/enums';
import normalize from '../utils/normalize';

class ProductEditPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProduct(id);
  }

  handleSubmit = product => {
    const {
      updateProduct,
      match: {
        params: { id },
      },
    } = this.props;
    const validProduct = normalize(product);
    updateProduct(id, validProduct);
  };

  handleSubmitSuccess = () => {
    this.props.history.goBack();
  };

  renderEditPage = product => {
    if (isEmpty(product)) {
      return 'loading...';
    } else {
      return (
        <ProductFormContainer
          mode={FormMode.Edit}
          initialValues={product}
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleSubmitSuccess}
        />
      );
    }
  };

  render() {
    const { product } = this.props;

    return this.renderEditPage(product);
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductForForm(state, props.match.params.id),
});

const mapDispatchToProps = {
  fetchProduct,
  updateProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEditPage);
