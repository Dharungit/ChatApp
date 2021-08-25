import React, {useState, useEffect} from "react"
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/signup.css"
import { auth, registerWithEmailAndPassword } from './firebase';

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [confirm, setConfirm] = useState("");
    const history = useHistory();

    const register = (e)=>{
        e.preventDefault();
        if( password !== confirm){
            alert("confirm password dose not match with password");
            return;
        }
        registerWithEmailAndPassword(name, email, password);

    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
      }, [user, loading]);

    return (
        <div className="continer">
            <div className="form-continer">
                <h2>Sign-up</h2>
                <form >
                    <div className="input">
                    <i class="fa fa-user icon1"></i>                    
                    <input 
                    type="text"
                    className="text_box"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    required

                      />
                      </div>
                    <div className="input"> 
                    <i class="fa fa-envelope icon"></i>                    

                    <input 
                    type="Email"
                    className="text_box"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required

                    />  
                    </div>   
                    <div className="input">
                    <i class="fa fa-lock icon1"></i>                    
                    <input 
                    type="password"  
                    className="text_box"
                    value={password}
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required

                    /> 
                    </div>
                    <div className="input">
                    <i class="fa fa-lock icon1"></i>                    
                    <input 
                    type="password" 
                    className="text_box"
                    value={confirm}
                    placeholder="Confirm password"
                    onChange={(e) => setConfirm(e.target.value)}
                    required

                    />
                    </div> 
                    <button type="submit" onClick={register}>Sign up</button>
                </form>
                <div className="link">
                Existing user? <Link className="login-link" to="/">Login</Link> here!
                </div>

            </div>
        </div>
    );
}

export default Signup;
