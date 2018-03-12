import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Product';
import ProtectedRoute from './components/ProtectedRoute'
const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/products/:id" component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
)

export default App;
