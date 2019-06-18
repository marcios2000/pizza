import React,{ Component} from 'react'
import {Link }from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import '../App.css'


class Nav extends Component {
    render() {
        return (
            <nav className="navegation">
                <Link to='/'><img className="picNav" src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizzatest.jpeg" alt=''/><img className='logo' src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/logo.png" alt='' /></Link>
                <div className='middleNav'>
                    <Link to='/menu' ><button className='button1' >Menu</button></Link>
                    <Link to='/gallery'><button className='button1'>Gallery</button></Link>
                    <Link to='/reservation'><button className='button1'>Reservation</button></Link>
                    <Link to="/contact"><button className='button1'>Contact</button></Link>
                </div>
                <Link to='/orderonline'><div><button className='button1'>Order Online</button></div></Link>
                
            </nav>
        )
    }
}
export default Nav;