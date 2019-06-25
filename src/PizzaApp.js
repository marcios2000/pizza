import React  from 'react';
import logo from './logo.svg';

//Import the modified App.css
import './pizzaApp.css';

// Import the Routes component, which contains our Route setup

import { Routes } from './pizzaRoutes'


// Provider component is a react-redux component for setting up the Redux Store

import { Provider } from 'react-redux'

// Import the ConfigureStore that holds the initial Configuration

import { configureStore } from './redux/store'

import * as PizzaActions from './pizzas/pizzaActions'

import AppBar from 'material-ui/AppBar';


// Create a Store from the Configuration, we can pass a Initial State here

const store = configureStore()

// At first dispatch a Get Todos Actions, So we'll recieve the Todos 
// fetched from the server at the start of the app

store.dispatch(PizzaActions.GetPizzas())

const PizzaApp = (props) => {
  return (
    
    //Provider needs to contain all the Containers/Components it will give access to the Store

      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default PizzaApp;
