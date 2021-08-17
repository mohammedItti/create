import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import "./style.css";
// import { useHistory } from "react-router-dom";

import LoginPage from "./LoginPage";
import DatabaseList from "./DatabaseList";
import ClientList from "./ClientList";
import DatabaseProvider from "./context";



function App() {
  const  adminUser = {
    username:"admin1413",
    password: "admin1413"
  }

  const [user, setUser] = useState({username:"", password:""});
  // const [error, setError] = useState("");

  const Login = details => {
    

    if(details.username === adminUser.username && details.password === adminUser.password){
      window.location="/login-database";
      setUser({
        username: details.username,
        password: details.password
      });
    }else{
      console.log("details do not match!");
    }
  }

  // const Logout = () => {
  //   console.log("Logout")
  // }

  return (
   
    <DatabaseProvider>
      <Router>
        <Switch>
          <Route path="/database-clients/:databaseId">
            <ClientList />
          </Route>
          <Route path="/login-database">
            <DatabaseList />
            </Route>
          <Route path="/">
          {<LoginPage Login={Login}  /> } 
          {/* error={error} */}
          </Route>
        </Switch>
      </Router>
    </DatabaseProvider>
  );
}

export default App;

