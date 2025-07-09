import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <article className="news-card">
      {article.media?.[0]?.["media-metadata"]?.[1]?.url && (
        <img
          className="news-card__image"
          src={article.media[0]["media-metadata"][1].url}
          alt={article.media[0].caption}
        />
      )}
      <div className="news-card__content">
        <h3 className="news-card__title">
          <Link to={article.url}>{article.title}</Link>
        </h3>
        <p className="news-card__byline">{article.byline}</p>
        <p className="news-card__abstract">{article.abstract}</p>
        <a
          className="news-card__link"
          href={article.url}
          target="_blank"
          rel="noreferrer"
        >
          Read more
        </a>
      </div>
    </article>
  );
}
