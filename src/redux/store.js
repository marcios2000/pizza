import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import PizzaListReducer from '../redux/PizzaListReducer'



const loggerMiddleware = createLogger()




export function configureStore(preloadedState) {

  return createStore(
    PizzaListReducer,
    preloadedState,

    

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}