import React,{ Component} from 'react'
import DatePicker from "react-datepicker2"
import Products from './products';
import Food from './Food/Food';
import PizzaApp from '../PizzaApp'
import DbClickToSelectTable from './text'
import Orders from './Orders';




class Reservation extends Component {
    render() {
        return (<div>
            <div className="reservation">
               
            </div>
           <DbClickToSelectTable />
           <Orders />
            
            </div>
        )
    }
}
export default Reservation;