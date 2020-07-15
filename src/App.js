import React from 'react';
import './css/Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './components/SearchBar';
import ListPlaces from './components/ListPlaces';
// import Nav from './components/Nav';
import DetailsPlace from './components/DetailsPlace';
import Header from './components/Header';
import MsgComponent from './components/MsgComponent';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';


function App() {
  return ( 
    <>
    <SearchBar />
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
      <MsgComponent />
      <Footer />
    </>
  );
}

export default App;