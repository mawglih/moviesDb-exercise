import {
  SEARCH_MOVIES_SUCCESS,
} from '../actionTypes';
const INITIAL_STATE = {};

const SearchReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
