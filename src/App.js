import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Search from './components/main/search';
import Index from './components/main/index';
import{ Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


function App({store, persistor}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/results" component={Index}/>
          </Switch>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
