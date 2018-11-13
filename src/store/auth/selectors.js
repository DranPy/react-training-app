import { get, values } from 'lodash';

const context = 'authors';

export const getAuthors = state => values(state[context].byId);

export const getAuthorsForSelect = state => {
  const authors = values(state[context].byId);
  return authors.map(author => ({
    value: author.id,
    label: `${author.firstName} ${author.lastName}`,
  }));
};

export const getAuthor = (state, id) => get(state, [context, 'byId', id], {});

export const getIsLoading = state => state[context].isLoading;
