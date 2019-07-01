  
import React from "react";
import "./dropdown.css";
import {Link }from 'react-router-dom'

export default function DropDown(props) {
  return (
    <div className="nav-menu-cont">
      <div className="close-menu-button" onClick={props.closeMenu}>
        X
      </div>
      <Link to='/menu' className='button1' >Menu</Link>
                    <Link to='/gallery' className='button1' >Gallery</Link>
                    <Link to='/reservation' className='button1'>Reservation</Link>
                    <Link to="/contact" className='button1'>Contact</Link>
                    <Link to='/orderonline' className='button1'>Order Online</Link>
    </div>
  );
}
