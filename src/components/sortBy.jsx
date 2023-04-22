import { useState, useEffect } from "react";

const SortBy = ({ setQueries }) => {
  const [sortDate, setSortDate] = useState(false);
  const [sortVotes, setSortVotes] = useState(false);
  const [sortAuthor, setSortAuthor] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    if (sortDate) {
      setQueries((currQueries) => {
        return {
          ...currQueries,
          sort_by: "created_at",
          order: sortAsc ? "asc" : "desc",
        };
      });
    } else if (sortVotes) {
      setQueries((currQueries) => {
        return {
          ...currQueries,
          sort_by: "votes",
          order: sortAsc ? "asc" : "desc",
        };
      });
    } else if (sortAuthor) {
      setQueries((currQueries) => {
        return {
          ...currQueries,
          sort_by: "author",
          order: sortAsc ? "asc" : "desc",
        };
      });
    } else {
      setQueries((currQueries) => {
        return {
          ...currQueries,
          sort_by: "created_at",
          order: sortAsc ? "asc" : "desc",
        };
      });
    }
  }, [sortDate, sortVotes, sortAuthor, sortAsc, setQueries]);

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    if (value === "created_at") {
      setSortDate(true);
      setSortVotes(false);
      setSortAuthor(false);
    } else if (value === "votes") {
      setSortVotes(true);
      setSortDate(false);
      setSortAuthor(false);
    } else if (value === "author") {
      setSortAuthor(true);
      setSortDate(false);
      setSortVotes(false);
    }
  };

  const handleAsc = () => {
    setQueries((currQueries) => {
      return {
        ...currQueries,
        order: "asc",
      };
    });
    setSortAsc(true);
  };

  const handleDesc = () => {
    setQueries((currQueries) => {
      return {
        ...currQueries,
        order: "desc",
      };
    });
    setSortAsc(false);
  };

  return (
    <div className="flex flex-row items-center justify-around pt-12 max-w-lg mx-auto text-sm sm:text-lg">
      <div className="flex flex-row items-center">
        <h3 className="pr-2">sort by:</h3>
        <select
          className="border-2 border-primary rounded-md px-2"
          onChange={handleDropdownChange}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="author">Author</option>
        </select>
      </div>
      <div className="flex flex-row items-center">
        <h3 className="pr-2">order:</h3>
        <button
          className={
            sortAsc
              ? "border-2 border-primary rounded-md w-12 mr-1 bg-light"
              : "border-2 border-primary rounded-md w-12 mr-1"
          }
          onClick={handleAsc}
        >
          ASC
        </button>
        <button
          className={
            !sortAsc
              ? "border-2 border-primary rounded-md w-12 mr-1 bg-light"
              : "border-2 border-primary rounded-md w-12 mr-1"
          }
          onClick={handleDesc}
        >
          DESC
        </button>
      </div>
    </div>
  );
};

export default SortBy;
