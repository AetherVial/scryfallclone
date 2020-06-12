import React from 'react';
import { withRouter, Link} from 'react-router-dom';
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

  
  if (!results.length) {
    return(
      <div>looks like nothing here fam</div>
    )
  } else {
    let list = results.map((e, i) => {
      return(
        <div key={results[i.toString()].id}>
          {results[i.toString()].name}
        </div>
      )
    })

    return (
      <div>
        {list}
      </div>
    )

  }
}

export default withRouter(connect(mstp, mdtp)(Index))
