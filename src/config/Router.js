import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from '../screens/Products'
import Login from '../screens/Login'
import Product from '../screens/Product'

const Routeur = ()=>{
  return(
  <Router>
      <div>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>

)}
  
    export default Routeur 