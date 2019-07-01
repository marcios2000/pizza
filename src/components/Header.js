import React from 'react';
// import {Redirect} from "react-router-dom"
// import axios from 'axios'
import '../Header.css'
// import styled from "styled-components";

function Header ({login, loggedIn, logout}) {
    
  return (
          <div className="Header">
          
          <div className="title"></div>
          
            <div className="loginContainer">
              <div className='userStatus'>
              {loggedIn !== "loading" ? (
          <>
            👤 {loggedIn ? `Logged in!` : ""}
            {loggedIn ? (
              <button onClick={logout}> Log out </button>
            ) : (
              <button onClick={login}> Log in / Sign up </button>
            )}
          </>
        ) : (
          "loading..."
        )}
              </div>
            </div>
          </div>
          )
      
  
  
  
  
      
  }
  export default Header