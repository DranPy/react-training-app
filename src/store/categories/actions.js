import {
  FETCH_ALL_CATEGORIES_REQUEST,
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from './actionsType';
import api from 'utils/api-helper';

export const fetchAllCategoriesRequest = () => ({
  type: FETCH_ALL_CATEGORIES_REQUEST,
});

export const fetchAllCategoriesSuccess = categories => ({
  type: FETCH_ALL_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchAllCategories = () => async dispatch => {
  dispatch(fetchAllCategoriesRequest());

  try {
    const categories = await api.getAllCategories();
    dispatch(fetchAllCategoriesSuccess(categories));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategory = id => async dispatch => {
  dispatch(fetchCategoryRequest());

  try {
    const category = await api.getCategory(id);
    dispatch(fetchCategorySuccess([category]));
  } catch (error) {
    console.error(error);
  }
};
