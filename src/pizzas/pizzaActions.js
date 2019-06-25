//Import the Todo API 

import { PizzaApi } from "./api/PizzaApi"


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
export const CREATE_PIZZA = '[Pizza] CREATE_PIZZA' 
export const CREATE_PIZZA_SUCCESS = '[Pizza] CREATE_PIZZA_SUCCESS' 
export const CREATE_PIZZA_ERROR = '[Pizza] CREATE_PIZZA_ERROR' 


//Read
export const GET_PIZZA = '[Pizza] GET_PIZZA' 
export const GET_PIZZAS_SUCCESS = '[Pizza] GET_PIZZAS_SUCCESS' 
export const GET_PIZZA_ERROR = '[Pizza] GET_PIZZA_ERROR' 


//Update
export const START_EDITING ='[Pizza] START_EDITING'
export const CANCEL_EDITING = '[Pizza] CANCEL_EDITING'

export const UPDATE_PIZZA = '[Pizza] UPDATE_PIZZA' 
export const UPDATE_PIZZA_SUCCESS = '[Pizza] UPDATE_PIZZA_SUCCESS' 
export const UPDATE_PIZZA_ERROR = '[Pizza] UPDATE_PIZZA_ERROR' 

export const COMPLETE_PIZZA = 'COMPLETE_PIZZA'


//Delete
export const DELETE_PIZZA = '[Pizza] DELETE_PIZZA' 
export const DELETE_PIZZA_SUCCESS = '[Pizza] DELETE_PIZZA_SUCCESS' 
export const DELETE_PIZZA_ERROR = '[Pizza] DELETE_PIZZA_ERROR' 



 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreatePizza(pizza){
    return (dispatch, getState) => {
        return PizzaApi.createPizza(pizza).then(res => {
            dispatch(CreatePizzaSuccess(res.data.data))
        })
    }
}

export function CreatePizzaSuccess(pizza){
    return {
        type:CREATE_PIZZA_SUCCESS,
        pizza
    }
}


//Read
export function GetPizzas(){
    return (dispatch, getState) => {
        return PizzaApi.getPizza().then(res => {
            dispatch(GetPizzaSuccess(res))
        })
    }
}

export function GetPizzaSuccess(pizzas){
    return {
        type:GET_PIZZAS_SUCCESS,
        pizzas
    }
}


//Update
export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function UpdatePizza(pizza) {
    return (dispatch, getState) => {
        
        //Multiple actions can be sent usign the Redux-Thunk middleware

        dispatch({
            type: UPDATE_PIZZA,
            pizza
        })
        PizzaApi.updatePizza(pizza).then(res => {
            dispatch(UpdatePizzaSuccess(res.data.data))
        })
    }
}
export function UpdatePizzaSuccess(pizza) {
    return {
        type: UPDATE_PIZZA_SUCCESS,
        pizza,
        _id: pizza._id
    }
}


//Delete
export function DeletePizza(pizza) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_PIZZA,
            pizza
        })
        PizzaApi.removePizza(pizza).then(res => {
            if (res.status === 204) {
                dispatch(DeletePizzaSuccess(pizza))
            }
        })
    }
}
export function DeletePizzaSuccess(pizza) {
    return {
        type: DELETE_PIZZA_SUCCESS,
        pizza,
        _id: pizza._id
    }
}
