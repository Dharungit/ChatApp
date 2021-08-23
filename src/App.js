import './App.css';
import signup from "./components/signup"
import login from "./components/login"
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={login}/>
          <Route exact path="/signup" component={signup}/>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
