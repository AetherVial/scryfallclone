import React, {useEffect, useState} from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { clearSearch, search } from '../../actions/search_actions';
import { connect } from "react-redux";

const mstp = (search) => {
  return {
    search: search
  }
}

const mdtp = dispatch => {
  return {
    search: (term) => dispatch(search(term)),
    clearSearch: () => dispatch(clearSearch())
  }
}

function Index() {
  const history = useHistory();
  let term = history.location.search.split('=')[1];
  let [results, setResults] = useState([]);

  useEffect(() => {

  })
  
  if (results.length === 0) {
    console.log(term)
    return <div>hello</div>
  } else {
    console.log(term)
    return <div>i have found something!</div>
  }
}

export default withRouter(connect(mstp, mdtp)(Index))
