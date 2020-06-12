import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import catto from '../../frostcatto1.png';

function Search() {
  let [searchTerm, setSearchTerm] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    // dispatch({type: 'newSearchTerm', payload: searchTerm})


    // history.push(
    //   {
    //     pathname: 'index'
    //   }
    // );
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


export default withRouter(Search);






