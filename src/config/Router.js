import React, {Component,useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect, useLocation} from "react-router-dom";

import Login from '../screens/Login'
import Products from '../screens/Products'

/* const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    let token = localStorage.getItem("token")
    if(token !==""){
      this.isAuthenticated = true
      setTimeout(cb, 100)
    }
     // fake async
  } ,
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  } 
}/*
/* function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {      return fakeAuth.isAuthenticated === true
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }}
 />
    }} />
  )
} */

/* function IsLogin () {
  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = React.useState(false)

  const { state } = useLocation()

  const login = () => fakeAuth.authenticate(() => {
    setRedirectToReferrer(true)
  })

 if (redirectToReferrer === true) {
  return <Redirect to={state?.from || '/'} />
 }
} */


const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/products" component={Products}/>
          <Route path="/" component={Login}/>
        </Switch>
    </Router>  
    );
    }

export default Routes;

