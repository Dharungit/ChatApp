import React from 'react'
import "../css/login.css"

function login() {
    return (
        <div className="continer">
        <div className="form-continer">
            <h2>Login</h2>
            <form action="">                                                           
                <input 
                type="Email"
                className="text_box"
                placeholder="Email"
                />                                     
                <input 
                type="password"  
                className="text_box"
                placeholder="Password" 
                />                   
                <button type="submit">Login</button>
            </form>
            <p> Dose not have a account? Register here! </p>
        </div>
    </div>
    )
}

export default login
