import { all, takeEvery } from 'redux-saga/effects';
import fetchMoviesSaga from './fetch';
import searchMoviesSaga from './searchMovie';

export function* watchFetch() {
  yield all([
    fetchMoviesSaga,
    searchMoviesSaga,
  ]);
}
