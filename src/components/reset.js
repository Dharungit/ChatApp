import React from 'react'
import "../css/reset.css"

function reset() {
    return (
        <div className="continer">
        <div className="form-continer">
            <h2>Reset password</h2>
            <form action=""> 
                <div className="input"> 
                <i class="fa fa-envelope ic1"></i>                                                                            
                <input 
                type="Email"
                className="text_box"
                placeholder="Email"
                />  
                </div>                    
                <button type="submit">Reset</button>
            </form>
            <p> Dose not have a account? Register here! </p>
        </div>
    </div>
    )
}

export default reset
