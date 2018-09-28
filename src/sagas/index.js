import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import fetchMoviesSaga from './fetch';
import searchMoviesSaga from './searchMovie';
import getMovieSaga from './movieDetail';
import {
  SEARCH_MOVIES_START,
  FETCH_MOVIES_START,
  GET_MOVIE_START,
} from 'actionTypes';
import {  } from '../actionTypes';

export function* watchFetch() {
  yield all({
    fetchMoviesSaga,
    searchMoviesSaga,
})
}

export function* watchMovieDetail() {
  yield takeEvery(GET_MOVIE_START, getMovieSaga);
}

export default {};
