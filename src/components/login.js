import React from 'react'
import "../css/login.css"

function login() {
    return (
        <div className="continer">
        <div className="form-continer">
            <h2>Login</h2>
            <form action=""> 
                <div className="input"> 
                <i class="fa fa-envelope ic1"></i>                                                                            
                <input 
                type="Email"
                className="text_box"
                placeholder="Email"
                />  
                </div> 
                <div className="input"> 
                <i class="fa fa-lock ic2"></i>                                                   
                <input 
                type="password"  
                className="text_box"
                placeholder="Password" 
                /> 
                </div>                   
                <button type="submit">Login</button>
            </form>
            <p>Forget Password</p>
            <p> Dose not have a account? Register here! </p>
        </div>
    </div>
    )
}

export default login
