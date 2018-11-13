import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { flow } from 'lodash';

import { getAuthorsForSelect } from '../../store/authors/selectors';
import { getCategoriesForSelect } from '../../store/categories/selectors';
import { fetchAllAuthors } from '../../store/authors/actions';
import { fetchAllCategories } from '../../store/categories/actions';

import ProductForm from '../../components/product/ProductForm';

const mapStateToProps = state => ({
  authors: getAuthorsForSelect(state),
  categories: getCategoriesForSelect(state),
});

const mapDispatchToProps = {
  fetchAuthors: fetchAllAuthors,
  fetchCategories: fetchAllCategories,
};

export default flow(
  reduxForm({
    form: 'productForm',
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductForm);
