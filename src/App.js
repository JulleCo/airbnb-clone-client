import React from 'react';
import './css/Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListPlaces from './components/ListPlaces';
import Nav from './components/Nav';
import DetailsPlace from './components/DetailsPlace';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return ( 
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/place-details/:id">
              <DetailsPlace />
            </Route>
            <Route path="/list-places">
              <ListPlaces />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;