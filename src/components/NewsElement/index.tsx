import React from 'react';
import './news-element.css';
import { INewsElement } from '../../models';

interface props {
  article: INewsElement;
}

export const NewsElement: React.FC<props> = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-card__picture">
        <img src={article.urlToImage} />
      </div>
      <div className="article-card__main-info">
        <div className="main-info_title">{article.title}</div>
        <div className="main-info__desc">{article.description}</div>
      </div>
    </div>
  );
};
