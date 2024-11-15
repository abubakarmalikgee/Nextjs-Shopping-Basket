"use client";
import store from "@/store/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <main>{children}</main>
    </Provider>
  );
};

export default StoreProvider;
