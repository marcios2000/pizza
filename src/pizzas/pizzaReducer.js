// Import the TodoAction Creators and TodoActionTypes

import * as PizzaActions from './pizzaActions'



// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection

export function PizzaListReducer(state = [], action) {
    switch (action.type) {

        // The cases ordered in CRUD order.

        // Create
        case PizzaActions.CREATE_PIZZA_SUCCESS: {
                return [
                    ...state,
                    action.pizza
                ];
        }
            
        //Read    
        case PizzaActions.GET_PIZZAS_SUCCESS: {
            
            return action.pizzas.data.data.docs;

        }
        
        // The following Cases handle the data by mapping it. Mostly because they are related with the modification of a single Data
        
        //Update    
        case PizzaActions.START_EDITING: {
            
            return state.map(s => pizza(s, action))

        }
        case PizzaActions.CANCEL_EDITING: {
            
            return state.map(s => pizza(s, action))

        }
        case PizzaActions.UPDATE_PIZZA: {

            return state.map(s => pizza(s, action))
            
        }
        case PizzaActions.UPDATE_PIZZA_SUCCESS: {

            return state.map(s => pizza(s, action))

        }
        
        //Delete    
        case PizzaActions.DELETE_PIZZA: {

            return state.map(s => pizza(s, action))

        }
        case PizzaActions.DELETE_PIZZA_SUCCESS: {

            return state.filter(s => pizza(s, action))

        }
            
        default:
            return state
    }
}


//The individual Reducer. It handles only one Todo Object.


const pizza = (state, action) => {

    // If the mapped todo of the previous state matches with the new ID of the action, 
    // Only then proceed to the Reducer Switch case

    if (state._id != (action._id || action.pizza._id)) {
        return state;
    }

    switch (action.type) {

        // Edit/modifies the individual Todos using ES6 spread operator. The cases are self explanatory.

        case PizzaActions.START_EDITING:
            {
                return {
                    ...state,
                    editing: true
                }
            }

        case PizzaActions.CANCEL_EDITING:
            {
                return {
                    ...state,
                    editing: false
                }
            }

        case PizzaActions.UPDATE_PIZZA:
            {
                return {
                    ...state,
                    editing: false,
                    updating: true
                }
            }

        case PizzaActions.UPDATE_PIZZA_SUCCESS:
            {
                return {
                    ...state,
                    ...action.pizza,
                    updating: false
                }
            }

        case PizzaActions.DELETE_PIZZA:
            {
                return {
                    ...state,
                    deleting: true
                }
            }

        case PizzaActions.DELETE_PIZZA_SUCCESS:
            {
                return false
            }

        default:
            {
                return state;
            }
    }
}
