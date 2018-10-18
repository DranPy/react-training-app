import { getIsLoading, getProduct, getProducts } from '../selectors';

describe('product/selectors.js', () => {
  const state = { products: { isLoading: false, byId: { '1': 'test1', '2': 'test2' } } };

  it('getIsLoading - should get loading state', () => {
    expect(getIsLoading(state)).toBe(false);
  });

  it('getProduct - should get product', () => {
    expect(getProduct(state, '1')).toBe('test1');
  });

  it('getProducts - should get products array', () => {
    expect(getProducts(state)).toEqual(['test1', 'test2']);
  });
});
