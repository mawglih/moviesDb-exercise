import axios from 'axios';
import {
  SEARCH_MOVIE_URL,
} from 'api';
import { put, take, call } from 'redux-saga/effects';

import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_START,
} from 'actionTypes';


export function* searchMoviesSaga() {
  try {
    const TERM  = yield take(SEARCH_MOVIES_START);
    yield console.log('TERM: ', TERM.payload);
    const response = yield axios.get(`${SEARCH_MOVIE_URL}&query=${TERM.payload}`);
    yield put({
      type: SEARCH_MOVIES_SUCCESS,
      payload: response.data,
    })
  } catch(error){
    yield put({
      type: SEARCH_MOVIES_FAILURE,
    });
  }
};

export default searchMoviesSaga();
