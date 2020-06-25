import React, {useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { receiveSearchTerm, search } from '../../actions/search_actions';
import { connect } from "react-redux";
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

  function onFormSubmit(e) {
    e.preventDefault();
    receiveSearchTerm(searchTerm);
    search(searchTerm);
    console.log(searchTerm);
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
