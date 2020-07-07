import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListPlaces from './components/ListPlaces';
import Nav from './components/Nav';
import CardPlace from './components/CardPlace';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return ( 
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/place-details/:id">
              <CardPlace />
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