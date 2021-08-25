import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import "../css/reset.css"

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
  
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
      }, [user, loading]);
    
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />  
                </div>                    
                <button type="submit" onClick={(e) =>{ 
                    e.preventDefault(); 
                    sendPasswordResetEmail(email)}}>Reset</button>
            </form>
            <p> Dose not have a account?<Link to="/"> Login</Link> here! </p>
        </div>
    </div>
    )
}

export default Reset
