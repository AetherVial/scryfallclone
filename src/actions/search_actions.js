import axios from 'axios'
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveSearch = payload => {
    return {
        type: RECEIVE_SEARCH,
        payload
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    }
}

export const searchaction = term => {
  return axios({
    method: "GET",
    url: `https://api.scryfall.com/cards/search?q=${term}`,
  })
}

export const search = query_string => dispatch => {
  return searchaction(query_string)
    .then(payload => {
      dispatch(receiveSearch(payload.data))
    });
}