import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import Search from './components/main/search';
import Index from './components/main/index';
import NavBar from './components/main/navbar';
import{ Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


function App({store, persistor}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
            <Route path = "/" component = {NavBar} />
            <Route exact path="/" component={Search}/>
            <Route path="/results" component={Index}/>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
