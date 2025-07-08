import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const { articles, getArticles } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    articles &&
    articles.map((article) => (
      <div className="article" key={article.id}>
        <h2>{article.title}</h2>
      </div>
    ))
  );
};

export default NewsDetail;
