import React, {useState} from 'react'
import "../css/signup.css"
function signup() {


    return (
        <div className="continer">
            <div className="form-continer">
                <h2>Sign-up</h2>
                <form action="">                    
                    <input 
                    type="text"
                    className="text_box"
                    placeholder="Enter your name"
                      />                                        
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
                    <input 
                    type="password" 
                    className="text_box"
                    placeholder="Confirm password"
                    />
                    <button type="submit">Sign-up</button>
                </form>
                Existing user? Login here!
            </div>
        </div>
    )
}

export default signup
