import React, {useEffect, useState} from 'react';
import { withRouter} from 'react-router-dom';
import { clearSearch, search } from '../../actions/search_actions';
import { connect } from "react-redux";

const mstp = ({search}) => {
  return {
    results: search.results,
    term: search.searchTerm
  }
}

const mdtp = dispatch => {
  return {
    search: (term) => dispatch(search(term)),
    clearSearch: () => dispatch(clearSearch())
  }
}

function Index({results, term}) {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(results);
  }, [])
  
  return(
    <div>
      hello
    </div>
  )
}

export default withRouter(connect(mstp, mdtp)(Index))
