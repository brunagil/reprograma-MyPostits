import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Navbar from './components/navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import PageNotFound from './pages/pageNotFound'
import { startServer } from './infra/api-config'

class App extends Component {
  render() {
    startServer()
    return (
      <React.Fragment> 
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login}/> 
          <Route path='/signup' component={Signup} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter (App);
