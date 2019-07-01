import React from 'react'
import {app} from "firebase";


console.log(app)

function AdminHome() {
    return (
        <>
        <h1>AdminHome</h1>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        
        
        
        </>
    )
}





export default AdminHome
