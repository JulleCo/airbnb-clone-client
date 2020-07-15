import React from 'react';
import './css/Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import ListPlaces from './components/ListPlaces';
import DetailsPlace from './components/DetailsPlace';
import Signup from './components/Signup';
import Signin from './components/Signin';


function App() {
  return ( 
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/place-details/:id">
              <DetailsPlace />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <ListPlaces />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;