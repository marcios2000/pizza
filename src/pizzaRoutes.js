import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// The Todo Container Component

import PizzaContainer from './pizzas/pizzaContainer'


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                {/* It's setup at the default index route */}

                <Route path="/" component={PizzaContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }
