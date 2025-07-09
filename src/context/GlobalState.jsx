// import React, { createContext, useReducer } from "react";
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import AppReducer from "./AppReducer";

const initialState = {
  userArticles: JSON.parse(localStorage.getItem("userArticles") || "[]"),
  apiArticles: [],
  articles: [],
  loading: false,
  error: null,
};

// export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getArticles = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json",
        {
          params: { "api-key": import.meta.env.VITE_NYT_API_KEY },
        }
      );
      dispatch({
        type: "SET_ARTICLES",
        payload: data.results,
      });
    } catch (err) {
      console.error("getArticles error:", err);
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  const addArticle = async (article) => {
    dispatch({ type: "ADD_ARTICLE", payload: article });
  };

  return (
    <GlobalContext.Provider
      value={{
        articles: state.articles,
        getArticles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
