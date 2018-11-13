import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from './actionsType';
import api from '../../utils/api-helper';

export const fetchManyProductsRequest = () => ({
  type: FETCH_MANY_PRODUCTS_REQUEST,
});

export const fetchManyProductsSuccess = products => ({
  type: FETCH_MANY_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchManyProducts = () => async dispatch => {
  dispatch(fetchManyProductsRequest());

  try {
    const products = await api.getAllProducts();
    dispatch(fetchManyProductsSuccess(products));
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProduct = id => async dispatch => {
  dispatch(fetchProductRequest());

  try {
    const product = await api.getProduct(id);
    dispatch(fetchProductSuccess([product]));
  } catch (error) {
    console.error(error);
  }
};

export const createProductSuccess = product => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const createProduct = product => async dispatch => {
  try {
    await api.createProduct(product);
    dispatch(createProductSuccess(product));
  } catch (error) {
    console.error(error);
  }
};

export const updateProductSuccess = product => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProduct = (id, product) => async dispatch => {
  try {
    console.log(id, product);
    await api.updateProduct(id, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProduct = id => async dispatch => {
  try {
    await api.deleteProduct(id);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    console.error(error);
  }
};
