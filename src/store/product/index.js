import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from './actionsType';

import { keyBy, castArray } from 'lodash';
import { debug } from 'util';

const initialState = {
  isLoading: false,
  byId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANY_PRODUCTS_REQUEST:
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PRODUCT_SUCCESS:
    case FETCH_MANY_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...keyBy(castArray(action.payload), 'id'),
        },
        isLoading: false,
      };

    default:
      return state;
  }
}
