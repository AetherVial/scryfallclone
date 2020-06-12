import React, {useState} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import catto from '../../frostcatto1.png';
import { clearSearch, search } from '../../actions/search_actions';

const mdtp = dispatch => {
  return {
    search: (term) => dispatch(search(term)),
    clearSearch: () => dispatch(clearSearch())
  }
}

function Search({search, clearSearch}) {
  let [searchTerm, setSearchTerm] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    search(searchTerm);
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


export default withRouter(connect(null, mdtp)(Search))






