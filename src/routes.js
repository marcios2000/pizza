import React from "react";
import Register from './components/Register';
import {Route, Switch} from 'react-router-dom';
import Menu from './components/Menu'
import Gallery1 from "./components/Gallery1";
import Home from './components/Home'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import OrderOnline from "./components/Orderonline";
import ShoppingCart from './ShoppingCart/ShoppingCart'





export default (
    <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/gallery' component={Gallery1} />
        <Route exact path='/' component={Home} />
        <Route exact path='/reservation' component={Reservation} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/orderonline' component={OrderOnline} />
        <Route exact path='/pizza' component={ShoppingCart} />
       
        

    </Switch>
)