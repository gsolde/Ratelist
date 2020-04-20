import React from "react";
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import SearchRate from './pages/searchRate';
import Credentials from './pages/credentials'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/credentials' component={Credentials}/>
        <Route exact path='/home' component={HomePage}/>
        <Route exact path='/searchRate' component={SearchRate}/>
      </Router>
    </div>
  );
}

export default App;