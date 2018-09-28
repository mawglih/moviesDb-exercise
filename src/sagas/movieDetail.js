import {
  getMovieInfo,
} from 'api';
import { put, take, call} from 'redux-saga/effects';

import {
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_START,
} from 'actionTypes';


export function* getMovieSaga() {
  try {
    let TERM  = yield take(GET_MOVIE_START);
    yield console.log('TERM: ', TERM.payload);
    const response = yield call(getMovieInfo, TERM.payload);
    yield put({
      type: GET_MOVIE_SUCCESS,
      payload: response,
    })
  } catch(error){
    yield put({
      type: GET_MOVIE_FAILURE,
    });
  }
};

export default getMovieSaga();