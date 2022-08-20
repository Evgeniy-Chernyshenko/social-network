import React from "react";
import { StoreType } from "./redux/redux-store";

export const StoreContext = React.createContext({} as StoreType);

type PropsType = {
  store: StoreType;
  children: React.ReactNode;
};

export const StoreProvider = (props: PropsType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};
