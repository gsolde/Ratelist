import React from "react";
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={HomePage}/>

      </Router>
    </div>
  );
}

export default App;