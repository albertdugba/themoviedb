import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};
