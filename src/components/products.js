import React, { Component } from 'react';
import '../Tachyons.css';

import Product from "./product";


const products = [

  {
    id: 1,
    name: "Pizza",
    description: "Red apples",
    img: "https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza7.jpg",
    price: 24.99
  },

  {
    id: 2,
    name: "A Cat",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }

];


class Products extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        {
          products.map(p => <Product key={p.id} {...p} />)
        }
      </main>
    );
  }
}
export default Products
