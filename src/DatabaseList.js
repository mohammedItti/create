import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import {useUserStore} from "./context";
import Logo from "./Logo.png";




function DatabaseList({ ...props }) {
  const history = useHistory();
  const {state} = useUserStore();
  const databaseList = state.databaseList; 
  const redirectCars = (databaseId) => {
    history.push({
      pathname: `/database-clients/${databaseId}`,
    });
  };

  return (
    
   
   
  

    <div className="database-page">
       <header>
      <div className="header-container">
              <div class="logo">
                <img src={Logo} alt="Logo"/>
                </div>
      </div>
   </header> 
   <div className="logout">
   <span>Logout</span>
   </div>
      <h1>Clients database List</h1>
      <div className="database-list">
        {databaseList.map((database, i) => (
          <div className="database-item" onClick={() => redirectCars(database.databaseId)}>{database.name}</div>
        ))}
      </div>
    </div>
  );
}

export default DatabaseList;