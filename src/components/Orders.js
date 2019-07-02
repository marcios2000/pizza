import React from 'react'
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table'

// const data = [
//     {
//         "order_id": 1,
//         "name": "Frank Abagnate",
//         "items_purchased": "Fresh Mozarella, Mushroom",
//         "total": "53.48"
//     },
//     {
//         "order_id": 2,
//         "name": "Edward Abbey",
//         "items_purchased": "Mushroom(onion, ham), Pickle and Bacon",
//         "total": "54.55"
//     },
//     {
//         "order_id": 3,
//         "name": "Hal Abelson",
//         "items_purchased": "Black Olive",
//         "total": "26.74"
//     },
//     {
//         "order_id": 4,
//         "name": "James Abourezk",
//         "items_purchased": "Sausage",
//         "total": "26.74"
//     },
//     {
//         "order_id": 5,
//         "name": "Abigail Adams",
//         "items_purchased": "Barbecue(onion)",
//         "total": "27.27"
//     },
//     {
//         "order_id": 6,
//         "name": "John Scott",
//         "items_purchased": "Artichoke",
//         "total": "26.74"
//     },
//     {
//         "order_id": 7,
//         "name": "Ben Agnew",
//         "items_purchased": "Supreme",
//         "total": "26.74"
//     },
//     {
//         "order_id": 8,
//         "name": "John Cage",
//         "items_purchased": "Oyster",
//         "total": "26.74"
//     }
// ]

const url = '/api/orders'
const cellEditProp = {
    mode: 'dbclick',
    blurToSave: true
  };
  
  class Orders extends React.Component {
      constructor(){
          super()
          this.state = {
            
            data: null
          }
      }


      componentDidMount(){
          fetch(url).then( response => response.json()).then(data => this.setState({data}));
          
         
      }
     deleteOrder (id) {
         axios.delete(url + `/${id}`).then(response => {
             this.setState({})
         })
     }


    render() {
        
       
        const selectRow = {
            mode: 'checkbox' 
          };
      return ( 
      <div>
        <BootstrapTable data={this.state.data } cellEdit={ cellEditProp } insertRow exportCSV selectRow={ selectRow }
        deleteRow
         >
            <TableHeaderColumn dataField='order_id' >Order ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' isKey={true}>Customer Name</TableHeaderColumn>
            <TableHeaderColumn dataField='items_purchased' >Product</TableHeaderColumn>
            <TableHeaderColumn dataField='total' >Total</TableHeaderColumn>
            <TableHeaderColumn dataField='date_ordered' >Date Ordered</TableHeaderColumn>
        </BootstrapTable>
        </div>
      );
    }
  }
  export default Orders