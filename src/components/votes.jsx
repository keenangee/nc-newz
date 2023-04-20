import { useState } from "react";
import * as api from "../utils/api";

const Votes = ({
  setVotesOpen,
  setVotes,
  article_id,
  setShowThumbsUp,
  setShowThumbsDown,
}) => {
  const [errMessage, setErrMessage] = useState(false);

  const handleUpVoteClick = () => {
    setShowThumbsUp(true);
    setErrMessage(false);
    setVotes((currVotes) => currVotes + 1);
    api
      .patchVotes(article_id, 1)
      .then(() => {
        setVotesOpen(false);
      })
      .catch((err) => {
        setVotes((currVotes) => currVotes - 1);
        setErrMessage(true);
      });
    setTimeout(() => {
      setShowThumbsUp(false);
    }, 1200);
  };

  const handleDownVoteClick = () => {
    setShowThumbsDown(true);
    setErrMessage(false);
    setVotes((currVotes) => currVotes - 1);
    api
      .patchVotes(article_id, -1)
      .then(() => {
        setVotesOpen(false);
      })
      .catch((err) => {
        setVotes((currVotes) => currVotes + 1);
        setErrMessage(true);
        return;
      });
    setTimeout(() => {
      setShowThumbsDown(false);
    }, 1200);
  };

  const handleCloseClick = () => {
    setVotesOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <p>
          {!errMessage
            ? "Do you want to upvote or downvote this article?"
            : "Oops... Something went wrong, try again!"}
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 mr-4 rounded"
            onClick={handleUpVoteClick}
          >
            👍
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded"
            onClick={handleDownVoteClick}
          >
            👎
          </button>
        </div>
        <button
          className="mt-4 bg-light hover:bg-gray-400 text-textCol font-bold py-2 px-4 rounded"
          onClick={handleCloseClick}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Votes;
