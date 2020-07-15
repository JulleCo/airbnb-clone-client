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

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return ( 
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Header />
          <Switch>
              <Route path="/place-details/:id">
                <DetailsPlace />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              {/* <Route path="/signup">
                <Signup />
              </Route> */}
              <Route path="/">
                <ListPlaces />
              </Route>
          </Switch>
        </Router>
      </AlertProvider>
    </>
  );
}

export default App;