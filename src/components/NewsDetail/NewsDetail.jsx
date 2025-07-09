import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const { articles, getArticles } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    articles &&
    articles.map((article) => (
      <div className="article" key={article.id}>
        <h2>
          <Link to={article.url}>{article.title}</Link>
        </h2>
        <p>{article.byline}</p>
      </div>
    ))
  );
};

export default NewsDetail;
