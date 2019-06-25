import {combineReducers} from 'redux'
import {PizzaListReducer} from '../pizzas/pizzaReducer'



 
const rootReducer = combineReducers({
    pizzas: PizzaListReducer
})

export default rootReducer
