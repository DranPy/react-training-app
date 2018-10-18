import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from '../actionsType';
import reducer from '../index';

describe('product/index.js', () => {
  const initialState = { isLoading: false, byId: [] };

  it('reducer should return valid state on FETCH_MANY_PRODUCTS_REQUEST action', () => {
    const expectState = { isLoading: true, byId: [] };
    expect(reducer(initialState, { type: FETCH_MANY_PRODUCTS_REQUEST })).toEqual(expectState);
  });

  it('reducer should return valid state on FETCH_MANY_PRODUCTS_SUCCESS action', () => {
    const item = { id: '1', test: 'some value' };
    const expectState = { isLoading: false, byId: { '1': item } };
    expect(
      reducer(initialState, {
        type: FETCH_MANY_PRODUCTS_SUCCESS,
        payload: [item],
      })
    ).toEqual(expectState);
  });

  it('reducer should return valid state on FETCH_PRODUCT_REQUEST action', () => {
    const expectState = { isLoading: true, byId: [] };
    expect(reducer(initialState, { type: FETCH_PRODUCT_REQUEST })).toEqual(expectState);
  });

  it('reducer should return valid state on FETCH_PRODUCT_SUCCESS action', () => {
    const item = { id: '1', test: 'some value' };
    const expectState = { isLoading: false, byId: { '1': item } };
    expect(
      reducer(initialState, {
        type: FETCH_PRODUCT_SUCCESS,
        payload: [item],
      })
    ).toEqual(expectState);
  });
});
