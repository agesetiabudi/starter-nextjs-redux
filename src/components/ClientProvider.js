'use client';
import store from "@/libs/store";
import { Provider } from "react-redux";


export default function ClientProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}