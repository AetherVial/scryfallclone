import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Search from './components/main/search';
import Index from './components/main/index';


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route path="/results" component={Index}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
