import React from 'react';
import './news-element.css';
import { INewsElement } from '../../models';

interface props {
  article: INewsElement;
}

export const NewsElement: React.FC<props> = ({ article }) => {
  return (
    <div className="article-card">
      <div>{article.title}</div>
      <div>{article.description}</div>
      <div>
        <div>{article.author}</div>
        <div>{article.publishedAt}</div>
      </div>
    </div>
  );
};
