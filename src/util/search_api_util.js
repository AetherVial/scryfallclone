import axios from 'axios';

export const search = term => {
  axios({
    method: 'GET',
    url: `https://api.scryfall.com/cards/search?q=${term}`
  })
}
