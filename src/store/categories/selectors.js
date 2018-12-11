import { get, values } from 'lodash';

const context = 'categories';

export const getCategories = state => values(state[context].byId);

export const getCategoriesForSelect = state => {
  const categories = values(state[context].byId);
  return categories.map(author => ({
    value: author.id,
    label: author.name,
  }));
};

export const getCategory = (state, id) => get(state, [context, 'byId', id], {});

export const getIsLoading = state => state[context].isLoading;
