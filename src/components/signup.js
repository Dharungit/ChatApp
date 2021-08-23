import React, {useState} from 'react'
import "../css/signup.css"
import user_icon from "../assets/user.png"

function signup() {


    return (
        <div className="continer">
            <div className="form-continer">
                <h2>Sign-up</h2>
                <form action="">
                    <div className="input">
                    <i class="fa fa-user ic1"></i>                    
                    <input 
                    type="text"
                    className="text_box"
                    placeholder="Enter your name"
                      />
                      </div>
                    <div className="input"> 
                    <i class="fa fa-envelope"></i>                    

                    <input 
                    type="Email"
                    className="text_box"
                    placeholder="Email"
                    />  
                    </div>   
                    <div className="input">
                    <i class="fa fa-lock ic1"></i>                    
                    <input 
                    type="password"  
                    className="text_box"
                    placeholder="Password" 
                    /> 
                    </div>
                    <div className="input">
                    <i class="fa fa-lock ic1"></i>                    
                    <input 
                    type="password" 
                    className="text_box"
                    placeholder="Confirm password"
                    />
                    </div> 
                    <button type="submit">Sign-up</button>
                </form>
                Existing user? Login here!
            </div>
        </div>
    )
}

export default signup
