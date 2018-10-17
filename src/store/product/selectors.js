import { get, values } from 'lodash';

export const getProducts = state => values(state.products.byId);

export const getProduct = (state, id) => get(state, ['products', 'byId', id], {});

export const getIsLoading = state => state.products.isLoading;
