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
import apiHelper from '../../../utils/apiHelper';

jest.mock('../../../utils/apiHelper');

// beforeEach(() => {
//   apiHelper.mockClear();
// });

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

    apiHelper.getAllProducts.mockReturnValue(expectPayload);
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

    apiHelper.getProduct.mockReturnValue(expectPayload);
    await fetchProduct()(dispatchHandler);
    expect(dispatchHandler).toHaveBeenCalledTimes(2);
    expect(dispatchHandler).toHaveBeenCalledWith(fetchProductRequest());
    expect(dispatchHandler).toHaveBeenCalledWith(fetchProductSuccess([expectPayload]));
  });
});
