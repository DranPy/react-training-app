import { connect } from 'react-redux';
import { fetchProduct } from '../../store/product/actions';
import { getProduct, getIsLoading } from '../../store/product/selectors';

import ProductDetails from '../../components/product/ProductDetails';

const mapStateToProps = (state, props) => ({
  isLoading: getIsLoading(state),
  product: getProduct(state, props.match.params.id),
});

const mapDispatchToProps = {
  fetchProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
