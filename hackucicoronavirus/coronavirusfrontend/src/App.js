import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';
import './App.css';
import Header from './functions/Header/Header';
import About from './functions/About/about';
import Meet from './functions/Meet/meet';
import Confirmation from './functions/Confirmation/confirmation';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Header}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/meetthecreators' component={Meet}/>
          <Route exact path='/confirmation' component={Confirmation}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
