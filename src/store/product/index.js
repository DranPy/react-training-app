import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from './actionsType';

import { keyBy, castArray } from 'lodash';

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
    case CREATE_PRODUCT_SUCCESS:
      return (state.byId[action.payload.id] = action.payload);
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...state.byId[action.payload.id],
            ...action.payload.product,
          },
        },
      };
    case DELETE_PRODUCT_SUCCESS:
      delete state.byId[action.payload];

      return {
        ...state,
      };

    default:
      return state;
  }
}
