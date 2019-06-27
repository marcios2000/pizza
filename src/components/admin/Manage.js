import React, {Component} from 'react';


import React, { Component } from 'react'

export default class Manage extends Component {
    constructor () {
        super()
        this.state = {
            img: '',
            name: '',
            price: '',
            
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }
    handleClick = (event) => {
        const {img, name, price} = this.state
        this.props.addClient(name,email,phone,username,password)
    }



    createPost() {
        axios.post('/api/pizza').then( results => {
          this.setState({ img: results.data }, {name: results.data}, {price: results.data});
        });
      }
    

    


    
    render() {
        return (
            <div>
                
<form >




<label>Name</label>


<input className={styles.smallInput} name="name" onChange={this.handleChange}/>


<label>Price</label>


<input className={styles.smallInput} name="price" onChange={this.handleChange}/>


<label>Image</label>


<input className={styles.smallInput} name="img" onChange={this.handleChange}/>



<button className={styles.send} onClick={this.handleClick}>Create Use</button>


</form>  

            </div>
        )
    }
}
