import React, { Component} from 'react'
import axios from 'axios';

class Food extends Component {
    constructor() {
        super();
        this.state ={
            products: []
        }
    }

    componentDidMount() {
        axios
        .get('/api/products')
        .then(results => {
            this.setState({
                products: results.data
            })
        })
    }



    render () {
        const products = this.state.products.map(product => {
            return product.name
        })
        return(
            <div>
                
                <form>
                    <input />
                    <input />
                    <input />
                    <input />
                    <button>Add</button>
                </form>
{products}
            </div>
        )
    }
}

export default Food 