import {
  FETCH_MANY_PRODUCTS_REQUEST,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from '../actionsType';

import {
  fetchManyProductsRequest,
  fetchManyProductsSuccess,
  fetchManyProducts,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProduct,
} from '../actions';
import api from 'utils/api-helper';

jest.mock('utils/api-helper');

describe('product/actions', () => {
  it('fetchManyProductsRequest', () => {
    const value = fetchManyProductsRequest();
    expect(value).toEqual({ type: FETCH_MANY_PRODUCTS_REQUEST });
  });

  it('fetchManyProductsSuccess', () => {
    const payload = [{ test: 1 }];
    const value = fetchManyProductsSuccess(payload);
    expect(value).toEqual({ type: FETCH_MANY_PRODUCTS_SUCCESS, payload });
  });

  it('fetchManyProducts', async () => {
    const dispatchHandler = jest.fn();
    const expectPayload = 'products';

    api.getAllProducts.mockReturnValue(expectPayload);
    await fetchManyProducts()(dispatchHandler);
    expect(dispatchHandler).toHaveBeenCalledTimes(2);
    expect(dispatchHandler).toHaveBeenCalledWith(fetchManyProductsRequest());
    expect(dispatchHandler).toHaveBeenCalledWith(fetchManyProductsSuccess(expectPayload));
  });

  it('fetchProductRequest', () => {
    const value = fetchProductRequest();
    expect(value).toEqual({ type: FETCH_PRODUCT_REQUEST });
  });

  it('fetchProductSuccess', () => {
    const payload = { test: 1 };
    const value = fetchProductSuccess(payload);
    expect(value).toEqual({ type: FETCH_PRODUCT_SUCCESS, payload });
  });

  it('fetchProduct', async () => {
    const dispatchHandler = jest.fn();
    const expectPayload = 'product';

    api.getProduct.mockReturnValue(expectPayload);
    await fetchProduct()(dispatchHandler);
    expect(dispatchHandler).toHaveBeenCalledTimes(2);
    expect(dispatchHandler).toHaveBeenCalledWith(fetchProductRequest());
    expect(dispatchHandler).toHaveBeenCalledWith(fetchProductSuccess([expectPayload]));
  });
});
