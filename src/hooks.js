import { useState } from "react";

const UseTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage++);
  };

  const previousPage = () => {
    setCurrentPage(currentPage--);
  };

  return {
    currentPage,
    nextPage,
    previousPage
  };
};

export default UseTable;
