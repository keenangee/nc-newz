const NextPrev = ({ page, setPage, maxPage }) => {
  const handleNextPage = () => {
    setPage((currPage) => {
      if (currPage < maxPage) {
        return currPage + 1;
      } else {
        return currPage;
      }
    });
  };

  const handlePreviousPage = () => {
    setPage((currPage) => {
      if (currPage > 1) {
        return currPage - 1;
      } else {
        return currPage;
      }
    });
  };

  return (
    <div className="text-center pt-8 flex flex-row justify-center items-center gap-3 text-xl">
      {page > 1 ? (
        <button className="text-5xl" onClick={handlePreviousPage}>
          ⬅️
        </button>
      ) : null}
      <p>Page: {page}</p>
      {page < maxPage ? (
        <button className="text-5xl" onClick={handleNextPage}>
          ➡️
        </button>
      ) : null}
    </div>
  );
};

export default NextPrev;
