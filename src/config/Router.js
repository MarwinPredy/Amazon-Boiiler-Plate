import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from '../screens/Login'
import Products from '../screens/Products'
import Detail from '../screens/Detail'
import Panier from '../screens/Panier'


const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/panier" component={Panier}/>
          <Route path="/" component={Login}/>
        </Switch>
    </Router>  
    );
    }

export default Routes;

