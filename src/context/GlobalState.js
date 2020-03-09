import React, { createContext, useReducer } from "react";
import { AppReducer, initialState } from "./AppReducer";

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
