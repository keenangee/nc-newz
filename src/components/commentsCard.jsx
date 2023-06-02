import { formatDate } from "../utils/utils";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { loading } from "../utils/utils";
import CommentVotes from "./commentVotes";

const CommentsCard = ({
  articleId,
  commentsOpen,
  totalComments,
  setTotalComments,
}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [votesOpen, setVotesOpen] = useState(false);
  const [votesId, setVotesId] = useState([]);
  const [votes, setVotes] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);
  const [showThumbsDown, setShowThumbsDown] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getCommentsByArticleId(articleId, limit).then((response) => {
      setComments(response.comments);
      setIsLoading(false);
      setTotalComments(response.total_count);
    });
  }, [articleId, limit, setTotalComments, totalComments]);

  useEffect(() => {
    if (!commentsOpen) {
      setLimit(5);
    }
  }, [commentsOpen]);

  const handleLoadMore = () => {
    setLimit((currLimit) => currLimit + 5);
    setIsLoading(false);
  };

  const handleVotes = (comment_id) => {
    setVotesOpen((currVotesOpen) => !currVotesOpen);
    setVotesId(comment_id);
  };

  return (
    <>
      {votesOpen && (
        <CommentVotes
          setVotesOpen={setVotesOpen}
          setVotes={setVotes}
          votesId={votesId}
          setShowThumbsUp={setShowThumbsUp}
          setShowThumbsDown={setShowThumbsDown}
        />
      )}
      {showThumbsUp && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center select-none">
          <span className="inline-flex items-center justify-center h-[350px] w-[350px] rounded-full bg-lightest border-8 border-primary text-[200px]">
            👍
          </span>
        </div>
      )}
      {showThumbsDown && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center select-none">
          <span className="inline-flex items-center justify-center h-[350px] w-[350px] rounded-full bg-lightest border-8 border-primary text-[200px]">
            👎
          </span>
        </div>
      )}
      <div>
        <div className="p-6">
          <h3 className="text-center text-primary font-bold text-xl underline pb-5">
            Comments
          </h3>
          {isLoading && loading()}
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="p-4">
                  <header className="flex flex-row gap-2">
                    <h4 className="font-bold text-primary mb-3">
                      {comment.author}
                    </h4>
                    <p>|</p>
                    <p>{formatDate(comment.created_at)}</p>
                  </header>
                  <p>{comment.body}</p>
                  <div>
                    <button
                      className=" bg-light hover:bg-dark hover:text-textColor px-4 py-2 border-s-5 border-primary border-2 rounded-lg text-center mt-3"
                      onClick={() => handleVotes(comment.comment_id)}
                    >
                      votes:{" "}
                      {comment.comment_id === votesId ? votes : comment.votes}
                    </button>
                  </div>
                  <br />
                  <hr />
                </li>
              );
            })}
          </ul>
          {totalComments > limit && (
            <div className="text-center">
              <button className="hover:text-textColor" onClick={handleLoadMore}>
                {isLoading ? "" : "Load more..."}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
