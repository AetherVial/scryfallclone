import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Search from './components/main/search';
import Index from './components/main/index';
import{ Provider } from 'react-redux';


function App({store}) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/results" component={Index}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
