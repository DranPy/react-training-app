import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from './actionsType';
import api from '../../utils/apiHelper';

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
    const response = await api.getAllProducts();
    dispatch(fetchManyProductsSuccess(response));
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
    const response = await api.getProduct(id);
    dispatch(fetchProductSuccess([response]));
  } catch (error) {
    console.error(error);
  }
};
