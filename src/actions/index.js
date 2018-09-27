import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_INIT,
} from 'actionTypes';

export const fetchMoviesStart = () => (
  {
    type: FETCH_MOVIES_START,
  }
);

export const fetchMoviesSuccess = ({ movies }) => (
  {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  }
)

export const fetchMoviesFailure = () => (
  {
      type: FETCH_MOVIES_FAILURE,
  }
);

export const searchMoviesStart = (term) => (
  {
    state: {},
    type: SEARCH_MOVIES_START,
    payload: term,
  }
);

export const searchMoviesSuccess = ({ search }) => (
  {
    type: SEARCH_MOVIES_SUCCESS,
    payload: search,
  }
)

export const searchMoviesFailure = () => (
  {
      type: SEARCH_MOVIES_FAILURE,
  }
);

export const searchMoviesInit = () => (
  {
    type: SEARCH_MOVIES_INIT,
  }
);
