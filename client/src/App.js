import React from 'react';
import {Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <switch>
      # Your home route MUST have "exact" or it will render all pages with "/"
      <Route exect path="/" component={Home} />
      <Route exect path="/about" component={About} />
      # a route with no path is ALWAYS RENDERED
      #MUST BE THE LAST ROUTE IN THE LIST OF ROUTES
      <Route component={NoMatch} /> 
    </switch>
  </div>
)

export default App;
