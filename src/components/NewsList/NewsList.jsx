import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import NewsCard from "../NewsCard/NewsCard";

const NewsList = () => {
  const { articles, getArticles, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Sorry, could not load articles.</p>;
  if (!articles.length) return <p>No articles found.</p>;

  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
