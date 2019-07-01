import React, { Component } from "react";
import "./Navbar.css";
import "../App.css"
import DropDown from "./dropdown";
import {Link }from 'react-router-dom'


export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <nav className="nav-cont">
        {this.state.showMenu && <DropDown closeMenu={this.toggleMenu} />}
        <div className="nav-links-cont">
          <div className="menu-icon" onClick={this.toggleMenu}>
            &#9776;
          </div>
          
          <img className="picNav" src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizzatest.jpeg" alt=''/><img className='logo' src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/logo.png" alt='' />
                    <Link to='/'className='button1' >Home</Link>
                    <Link to='/menu' className='button1' >Menu</Link>
                    <Link to='/gallery' className='button1' >Gallery</Link>
                    {/* <Link to='/reservation' className='button1'>Reservation</Link> */}
                    <Link to='/'><img className="picNav" src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizzatest.jpeg" alt=''/><img className='logo' src="https://pizzaplace2000.s3.us-east-2.amazonaws.com/logo.png" alt='' /></Link>
                    <Link to="/contact" className='button1'>Contact</Link>
                    <Link to='/orderonline' className='button1'>Order Online</Link>
                    
                    
        </div>
        
      </nav>
    );
  }
}