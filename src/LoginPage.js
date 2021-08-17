import React, { useState } from 'react';
import "./style.css";
import Logo from "./Logo.png";




// import data from "./jsonData";





function LoginPage({Login, error}){
   const [details, setDetails] = useState({username:"", password:""});

   const submitHandler = e => {
       e.preventDefault();

       Login(details);
   } 

    

  
  return(
    <div className="login-page">
       <header>
      <div className="header-container">
              <div class="logo">
                <img src={Logo} alt="Logo"/>
                </div>
      </div>
   </header> 
   
  <h2 className="header2">Please login to view databases available</h2>
   <div className="login-container">
      <div className="tc">
        
          <input type="text" id="username" placeholder="Username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
          <br />
          <input type="password" id="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
          <br />
          
          <div className="span">
            <span>forget password</span>
            </div>
          <br />
          <br />
          <div className="buttons">
            
          <button clsss="button" type="submit" id="loginBtn" btnName="Login"ß onClick={submitHandler}>submit</button>
          
            </div>
        
      </div>
      <div className="wrrning">
        please be aware to update your password every 30 days!
        </div>
      </div>
    </div>
   );
     }
    

export default LoginPage;

     
     
  
    
     

