import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:5050'

//Setting the todos URI

const PIZZA_API = `${API}/api/products`

// The CRUD Operations of the Todo Resource.


//Create
const createPizza = pizza => {
    return HttpClient.post(PIZZA_API, pizza)
}

//Read
const getPizza = () => {
    return HttpClient.get(PIZZA_API)
}

//Update
const updatePizza = pizza => {
    return HttpClient.put(PIZZA_API, pizza)
}

//Delete
const removePizza = pizza => {
    return HttpClient.delete(`${PIZZA_API}/${pizza._id}`)
}


//Encapsulating in a JSON object

const PizzaApi = {createPizza, getPizza, updatePizza, removePizza}

export {PizzaApi}