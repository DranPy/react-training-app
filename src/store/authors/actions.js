import {
  FETCH_ALL_AUTHORS_REQUEST,
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
} from './actionsType';
import api from 'utils/api-helper';

export const fetchAllAuthorsRequest = () => ({
  type: FETCH_ALL_AUTHORS_REQUEST,
});

export const fetchAllAuthorsSuccess = authors => ({
  type: FETCH_ALL_AUTHORS_SUCCESS,
  payload: authors,
});

export const fetchAllAuthors = () => async dispatch => {
  dispatch(fetchAllAuthorsRequest());

  try {
    const authors = await api.getAllAuthors();
    dispatch(fetchAllAuthorsSuccess(authors));
  } catch (error) {
    console.error(error);
  }
};

export const fetchAuthorRequest = () => ({
  type: FETCH_AUTHOR_REQUEST,
});

export const fetchAuthorSuccess = author => ({
  type: FETCH_AUTHOR_SUCCESS,
  payload: author,
});

export const fetchAuthor = id => async dispatch => {
  dispatch(fetchAuthorRequest());

  try {
    const author = await api.getAuthor(id);
    dispatch(fetchAuthorSuccess([author]));
  } catch (error) {
    console.error(error);
  }
};
