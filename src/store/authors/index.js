import {
  FETCH_ALL_AUTHORS_REQUEST,
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
} from './actionsType';

import { keyBy, castArray } from 'lodash';

const initialState = {
  isLoading: false,
  byId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_AUTHORS_REQUEST:
    case FETCH_AUTHOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ALL_AUTHORS_SUCCESS:
    case FETCH_AUTHOR_SUCCESS:
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
