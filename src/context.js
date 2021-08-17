import React, { useState } from "react";
import data from "./jsonData";

const DatabaseContext = React.createContext();

function DatabaseProvider({ children }) {
  const [state, setState] = useState({
    databaseList: [...data],
  });

  const setClients = React.useCallback(
    (clients, databaseId) => {
      const list = [...state.databaseList];
      const index = list.findIndex(
        (database) => `${database.databaseId}` === `${databaseId}`
      );
      console.log(index);
      if (index !== -1) {
        list[index] = { ...list[index], clients };
        setState({ databaseList: list });
      }
    },
    [state.databaseList]
  );

  const value = {
    state,
    setClients,
  };

  return (
    <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>
  );
}

export function useUserStore() {
  return React.useContext(DatabaseContext);
}

export default DatabaseProvider;
