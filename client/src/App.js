import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar'; 


     // Your home route MUST have "exact" or it will render all pages with "/"
      // a route with no path is ALWAYS RENDERED
      // MUST BE THE LAST ROUTE IN THE LIST OF ROUTES
const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exect path="/" component={Home} />
      <Route exect path="/about" component={About} />
      <Route component={NoMatch} /> 
    </Switch>
  </div>
)

export default App;
