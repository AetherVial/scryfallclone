import React from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { clearSearch, search } from '../../actions/search_actions';
import { connect } from "react-redux";
import Card from './card';
import "../../stylesheets/navbar.css";

const mstp = ({ search }) => {
  return {
    term: search.searchTerm
  }
}

const mdtp = dispatch => {
  return {
    search: (term) => dispatch(search(term))
  }
}

function NavBar({ term }) {
  let [searchTerm, setSearchTerm] = useState(term);
  let history = useHistory();

  function onFormSubmit(e) {
    e.preventDefault();
    receiveSearchTerm(searchTerm);
    search(searchTerm);
    history.push('/results')
  }

  return(
    <div className="navbar">
      <form onSubmit={e => onFormSubmit(e)}>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value.toLowerCase())}></input>
      </form>
    </div>
  )
 

  
}

export default withRouter(connect(mstp, mdtp)(NavBar))
