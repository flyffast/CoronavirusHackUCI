import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';
import './App.css';
import Header from './functions';



function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Header}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
