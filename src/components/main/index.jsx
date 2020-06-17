import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import { clearSearch, search } from '../../actions/search_actions';
import { connect } from "react-redux";
import Card from './card';
import "../../stylesheets/card.css";

const mstp = ({search}) => {
  return {
    results: search.results,
    term: search.searchTerm
  }
}

const mdtp = dispatch => {
  return {
    search: (term) => dispatch(search(term))
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
        <Card key={i} card={e}/>
      )
    })

    return (
      <div className="index">
        {list}
      </div>
    )

  }
}

export default withRouter(connect(mstp, mdtp)(Index))
