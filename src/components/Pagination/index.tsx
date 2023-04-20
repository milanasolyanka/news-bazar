import React, { useEffect } from 'react';

interface IPagination {
  pages: number[];
  changePage: React.Dispatch<React.SetStateAction<number>>;
  //setPages
}

export const Pagination: React.FC<IPagination> = ({ pages, changePage }) => {
  return (
    <div>
      {pages.map((page) => (
        <span onClick={() => changePage(page)}>{page}</span>
      ))}
    </div>
  );
};
