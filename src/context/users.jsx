import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(<p>Sign&nbsp;in</p>);

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
