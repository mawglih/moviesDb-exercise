import { all, takeLatest } from 'redux-saga/effects';
import fetchMoviesSaga from './fetch';
import searchMoviesSaga from './searchMovie';
// import {
//   SEARCH_MOVIES_INIT,
// } from 'actionTypes';

export function* watchFetch() {
  yield all([
    fetchMoviesSaga,
    searchMoviesSaga,
  ]);
}

// export function* watchSearch() {
//   yield takeLatest(SEARCH_MOVIES_INIT, searchMoviesSaga);
// }

export default {};
