import React, {useEffect, useState} from 'react';
import { withRouter, useHistory } from 'react-router-dom';

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

export default withRouter(Index);