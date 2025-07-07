import React, { createContext, useReducer } from "react";
import axios from "axios";
import newsReducer from "./newsReducer";

const initialState = {
  articles: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const getNews = async () => {
    const response = await axios.get();
  };
};
