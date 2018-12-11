import { connect } from 'react-redux';
import { fetchManyProducts, deleteProduct } from '../../store/product/actions';

import { getProducts, getIsLoading } from '../../store/product/selectors';
import ProductsList from '../../components/product/ProductsList';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  products: getProducts(state),
});

const mapDispatchToProps = {
  fetchProducts: fetchManyProducts,
  deleteProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
