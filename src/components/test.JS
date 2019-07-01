import React, { Component } from 'react'
import axios from 'axios'


export default class Test extends Component {


    constructor(){
        super()
        this.state = {
            pizza: []

          
        }
    }
    componentDidMount() {
      axios.get('/api/gallery')
      .then(response => {
        this.setState({pizza: response.data.gallery});
      }) 
      
      .catch(error => {
        console.log(error);
      });
    }

    



    render() {
        return (
            <div>
              
            </div>
        )
    }
}
