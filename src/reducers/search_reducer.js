import { RECEIVE_SEARCH, CLEAR_SEARCH, RECEIVE_SEARCH_TERM, CLEAR_SEARCH_TERM } from '../actions/search_actions';

let _nullState = {
  searchTerm: "",
  results: []
};

const searchReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_TERM:
      newState.searchTerm = action.term;
      return newState;
    case RECEIVE_SEARCH:
      newState.results = action.payload.data;
      return newState;
    case CLEAR_SEARCH:
      return _nullState
    case CLEAR_SEARCH_TERM:
      return _nullState
    default:
      return state;
  }
}

export default searchReducer;