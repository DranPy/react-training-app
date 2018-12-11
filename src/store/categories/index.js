import {
  FETCH_ALL_CATEGORIES_REQUEST,
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from './actionsType';

import { keyBy, castArray } from 'lodash';

const initialState = {
  isLoading: false,
  byId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_REQUEST:
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ALL_CATEGORIES_SUCCESS:
    case FETCH_CATEGORY_SUCCESS:
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
