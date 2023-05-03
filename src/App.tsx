import React, { useEffect, useState } from 'react';
import './App.css';
import { FormField } from './components/FormField';
import { NewsList } from './components/NewsList';
import { INewsList } from './models';
import { getNews } from './api';
import { count } from 'console';
import { Pagination } from './components/Pagination';

function App() {
  const [value, setValue] = useState<string>('');
  const [news, setNews] = useState<INewsList>();
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getNews('us', currentPage).then((res) => {
      setNews(res.data);
      getPageCount(res.data.totalResults)
    });
  }, [currentPage]);

  const getPageCount = (count: number) => {
      const pageCount = Math.ceil(count / 10);
      const pagesArray = [];
      for (let i = 1; i <= pageCount; i++) pagesArray.push(i);
      setPages(pagesArray);
  };

  return (
    <div>
      <FormField />
      {news !== undefined && (
        <div>
          <NewsList
            status={news.status}
            totalResults={news.totalResults}
            articles={news.articles}
          />
          <Pagination pages={pages} changePage={setCurrentPage} />
        </div>
      )}
    </div>
  );
}

export default App;
