import React, {useState} from 'react';
import { connect } from "react-redux";
import {withRouter, useHistory} from 'react-router-dom';
import catto from '../../frostcatto1.png';
import { clearSearch, search, receiveSearchTerm, clearSearchTerm } from '../../actions/search_actions';

const mstp = ({search}) => {
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

function Search({search, clearSearch}) {
  let [searchTerm, setSearchTerm] = useState('');
  let history = useHistory();

  function onFormSubmit(e) {
    e.preventDefault();
    receiveSearchTerm(searchTerm);
    search(searchTerm);
    history.push('/results')
  }

  return(
    <div className="App">
      <header className="App-header">
        <img src={catto} className="App-logo" alt="logo" />

        <form onSubmit={e => onFormSubmit(e)}>
          <input type="text" placeholder="Start Searching Here!" onChange={e => setSearchTerm(e.target.value.toLowerCase())}></input>
        </form>
        <p>
          <code>Welcome to ScraureusFetch, where Aureus fetches cardboard rectangles.</code>
        </p>
      </header>
    </div>
  );
}


export default withRouter(connect(mstp, mdtp)(Search))






