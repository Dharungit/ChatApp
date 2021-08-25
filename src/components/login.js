import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) history.replace("/dashboard");
      }, [user, loading]);
    
    return (
        <div className="continer">
        <div className="form-continer">
            <h2>Login</h2>
            <form action=""> 
                <div className="input"> 
                <i class="fa fa-envelope icon1"></i>                                                                            
                <input 
                type="Email"
                className="text_box1"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />  
                </div> 
                <div className="input"> 
                <i class="fa fa-lock icon2"></i>                                                   
                <input 
                type="password"  
                className="text_box1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                /> 
                </div>                   
                <button type="submit" onClick={(e) =>{
                    e.preventDefault();
                    signInWithEmailAndPassword(email, password)}}>Login</button>
            </form>
            <p><Link to="/reset">Forgot Password</Link></p>
            <p> Don't have an account? <Link to="/signup">Register</Link> here! </p>
        </div>
    </div>
    )
}

export default Login
