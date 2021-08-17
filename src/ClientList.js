import React from "react";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useUserStore } from "./context";
import "./style.css";
import Dialog from "./Dialog";
import Logo from "./Logo.png";
// import jsonData from "./jsonData";

function ClientList({ ...props }) { 
 let history = useHistory();
  let { databaseId } = useParams();
  const { state, setClients } = useUserStore();
  const [dialog, setDialog] = React.useState();
  const [client, setClient] = React.useState();
  const [clientIndex, setClientIndex] = React.useState();
  
  const databaseList = state.databaseList;
  console.log(databaseList);
  const database = databaseList.find((database) => `${database.databaseId}` === databaseId);
  console.log(database, databaseId);
  

  
  
  
//    document.querySelector(".Filter").addEventListener("click", () => {

//      // to get the value of the input after you click on the button 
//      // we declare the text variable that going to have the text user going to enter
//      // in the search bar 
//      let text = document.getElementById("filter-clients").value;
//      handleGetClients().then(clients => {
//          let filteredClients = handleFilterClients(clients, text);
//          handleShowClients(filteredClients);
//           // console.log(filteredClients);
//      })
//       // console.log(text);
//  })
//      const handleGetClients = React.useCallback(() => {
//          return fetch("jsonData.js")
//          .then(response => response.json())
//          .then(data => {
    
//              // console.log(data);
//              return data
//          })
//      })


//      const handleShowClients = React.useCallback((clients) =>{
//         // console.log("Clients in showJobs" , clients);
    
//         let clientsList = document.querySelector(".clients-list");
//         let clientsHTML ="";
//         clients.forEach(client => {
//             clientsHTML += `
//             <table className="client-list" cellPadding="10" cellSpacing="0">
     
//             <thead>
//               <tr>
//                 <th>${client.id}</th>
//                 <th>${client.firstName}</th>
//                 <th>${client.lastName}</th>
//                 <th>${client.email}</th>
//                 <th>${client.position}</th>
//                 <th>${client.program}</th>
//                 <th>${client.addres}</th>
//                 <th>${client.city}</th>
//                 <th>${client.state}</th>
//                 <th>${client.zipCode}</th>
//                 <th>${client.note}</th>
            
//     `
    
        
//         })
    
//         // console.log(jobsHTML);
    
//         clientsList.innerHTML = clientsHTML;
//      })
     

     




//      const handleFilterClients = React.useCallback((clients, searchText) => {
//        if(searchText){
//            let filteredClients = clients.filter(client => {
//                if(client.id.toLowerCase().includes(searchText.toLowerCase())
//            || client.firstName.toLowerCase().includes(searchText.toLowerCase())
//            || client.lastName.toLowerCase().includes(searchText.toLowerCase())
//            || client.email.toLowerCase().includes(searchText.toLowerCase())
//            || client.position.content.toLowerCase().includes(searchText.toLowerCase())
//            || client.program.content.toLowerCase().includes(searchText.toLowerCase())
//            || client.addres.content.toLowerCase().includes(searchText.toLowerCase())
//            || client.city.content.toLowerCase().includes(searchText.toLowerCase())
//            || client.state.content.toLowerCase().includes(searchText.toLowerCase())
//            || client.zipCode.content.toLowerCase().includes(searchText.toLowerCase())
//            ||client.note.content.toLowerCase().includes(searchText.toLowerCase())) {
//                return true;
//        }else{
//            return false;
//        }
//    })
//         return filteredClients;

//    } else {
//        return clients; 
//    }

//    }, []);

  const handleDelete = React.useCallback(
    (index) => {
      const isConfirmed = window.confirm("Do you want to delete?");
      console.log(isConfirmed);
      if (isConfirmed) {
        const clientList = [...database.clients];
        clientList.splice(index, 1);
        setClients(clientList, databaseId);
      }
    },
    [setClients, databaseId, database]
  );

  const handleChange = React.useCallback(
    (index) => {
      const client = database.clients[index];
      setDialog(true);
      setClientIndex(index);
      setClient(client);
    },
    [database]
  );

  const handleAdd = React.useCallback(() => {
    setDialog(true);
    setClient({});
    setClientIndex();
  }, []);

  

  const handleClose = React.useCallback(() => {
    setClient({});
    setClientIndex();
    setDialog(false);
  }, []);

  const handleSave = React.useCallback(() => {
    const clientList = [...database.clients];
    if (clientIndex) {
      clientList.splice(clientIndex, 1, { ...client });
      setClients(clientList, databaseId);
    } else {
      clientList.push({ ...client });
      setClients(clientList, databaseId);
    }
    handleClose();
  }, [client, handleClose, clientIndex, setClients, database, databaseId]);

  const handleFieldChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setClient((client) => {
      return { ...client, [name]: value };
    });
  }, []);
  console.log({ clientIndex });
  return (


    

    <div>
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
      <h2></h2>
      <div className="filter-client">
      
        <input className="filter-by-name" id="filter-clients" type="text" placeholder="filter by name">
        
        </input>
        <div className="Filter">
        <span>Filter</span>
        </div>
        
        </div>
        
      
    

      <table className="client-list" cellPadding="10" cellSpacing="0">
     
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Email</th>
            <th>position</th>
            <th>program</th>
            <th>address</th>
            <th>city</th>
            <th>state</th>
            <th>zipCode</th>
            <th>note</th>
            <th colSpan="2">
              <button type="button" onClick={handleAdd}>
                Add new Client
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {database.clients.map((client, i) => (
            <tr key={i}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.position}</td>
              <td>{client.program}</td>
              <td>{client.address}</td>
              <td>{client.city}</td>
              <td>{client.state}</td>
              <td>{client.zipCode}</td>
              <td>{client.note}</td>
              <td>
                <button type="button" onClick={() => handleChange(i)}>
                  Edit Data
                </button>
              </td>

              <td>
                <button type="button" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {dialog && (
        <Dialog
          onClose={handleClose}
          title={clientIndex ? "Email" : "Add new client"}
        >
          <div>
            <table cellSpacing="15"> 
              <tbody>
                {[undefined, null].includes(clientIndex) ? (
                      <React.Fragment>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Id</td>
                      <td>
                        <input
                          type="text"
                          name="id"
                          value={client.id || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    
                    </React.Fragment>
                        ) : null}
                    <tr>
                      <td style={{ fontWeight: "bold" }}>firstName</td>

                      <td>
                        <input
                          type="text"
                          name="firstName"
                          value={client.firstName || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    
                     
                     
                
                     <tr>
                      <td style={{ fontWeight: "bold" }}>lastName</td>

                      <td>
                        <input
                          type="text"
                          name="lastName"
                          value={client.lastName || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr> 
                    
                    
                   
                   <tr>
                    <td style={{ fontWeight: "bold" }}>Email</td>

                  <td>
                    <input
                      type="text"
                      name="email"
                      value={client.email || ""}
                      onChange={handleFieldChange}
                    />
                  </td>
                </tr>
                
                <tr>
                      <td style={{ fontWeight: "bold" }}>position</td>
                      <td>
                        <input
                          type="text"
                          name="position"
                          value={client.position || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                  
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Program</td>
                      <td>
                        <input
                          type="text"
                          name="program"
                          value={client.program || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Address</td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          value={client.address || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>city</td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          value={client.address || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>state</td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          value={client.address || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>zipCode</td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          value={client.address || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Note</td>
                      <td>
                        <input
                          type="text"
                          name="note"
                          value={client.note || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                   
                 
              </tbody>
            </table>
        
            
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <button
                style={{ padding: "5px 100px" }}
                type="button"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default ClientList;
