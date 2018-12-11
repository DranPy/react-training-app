import { get, values, map, isEmpty } from 'lodash';

const context = 'products';

export const getProducts = state => values(state[context].byId);

export const getProduct = (state, id) => get(state, [context, 'byId', id], {});

export const getProductForForm = (state, id) => {
  const product = getProduct(state, id);

  if (isEmpty(product)) {
    return {};
  }

  return {
    ...product,
    authors: map(product.authors, author => ({
      value: author.id,
      label: author.name,
    })),
    categories: map(product.categories, category => ({
      value: category.id,
      label: category.name,
    })),
  };
};

export const getIsLoading = state => state[context].isLoading;
