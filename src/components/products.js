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
      name: 'React',
      cart: [{
        id: 4,
        name: "Banana",
        description: "I need those carbs",
        img: "https://tachyons.io/img/avatar_1.jpg",
        price: 100,
        units: 0
          
      }]
    };
    this.handleAddFunc = this.handleAddFunc.bind(this)
  }
  handleAddFunc(product) {
      const existingProductIndex = this.state.cart.findIndex(p => p.id === product.id);
      if(existingProductIndex >= 0) {
          const cartProducts = this.state.cart.slice();
          const existingProduct = cartProducts[existingProductIndex]

          const updatedUnitsProduct = {
              ...existingProduct,
              units: existingProduct.units + product.units
          }

          cartProducts[existingProductIndex] = updatedUnitsProduct

          this.setState({
              cart: cartProducts
          })
      } else {
        this.setState({
            cart: [...this.state.cart, product]

      })
    }
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <ul>
         {this.state.cart.map(c => <li>{c.name} | units {c.units}</li>)   }
        </ul>

        {
          products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc} />)
        }
      </main>
    );
  }
}
export default Products
