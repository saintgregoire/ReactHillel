import { createContext, useState } from "react";

export const NameContext = createContext("");
NameContext.displayName = "NameContext";

function NameContextProvider({ children }) {
  const [ userName, setUserName ] = useState("");

  const userValue = {
    userName: userName,
    setUserName: setUserName,
  };

  return (
    <NameContext.Provider value={userValue}>{children}</NameContext.Provider>
  );
}

export default NameContextProvider;
