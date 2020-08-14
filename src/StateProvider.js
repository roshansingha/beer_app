//setup data layer
// We need this to track the favorites

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer

export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside a componenet
export const useStateValue = () => useContext(StateContext);
