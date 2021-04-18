import React from "react"
import Signup from "./Signup"
import fire from "../firebase"
import HomePage from "./HomePage"
import Login from "./Login"
import Dashboard from "./Dashboard"
import PrivateRoute from "./PrivateRoute"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  {AuthProvider}  from "../contexts/AuthContexts"
// import { AuthProvider } from "../contexts/AuthContexts"
function App() {


  return (
    
  
        <Router>
         <AuthProvider>
          <Switch>
              <Route exact path = "/" component = {HomePage} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/register" component = {Signup} />
             <PrivateRoute exact path = "/dashboard" component = {Dashboard} /> 

            </Switch>
         </AuthProvider>
          
    </Router>
  
    
   
)
}
export default App
