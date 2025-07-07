import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  articles: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getArticles = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json",
        { params: { "api-key": process.env.NYT_NEWS_APP_NYT_API_KEY } }
      );
    } catch (error) {}
  };
};
