import { formatDate } from "../utils/utils";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { loading } from "../utils/utils";

const CommentsCard = ({
  articleId,
  commentsOpen,
  totalComments,
  setTotalComments,
}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    api.getCommentsByArticleId(articleId, limit).then((response) => {
      setComments(response.comments);
      setIsLoading(false);
      setTotalComments(response.total_count);
    });
  }, [articleId, limit]);

  useEffect(() => {
    if (!commentsOpen) {
      setLimit(5);
    }
  }, [commentsOpen]);

  const handleLoadMore = () => {
    setLimit((currLimit) => currLimit + 5);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col mx-6 text-dark border-4 border-double border-darkest">
        <div className="p-6">
          {isLoading && loading()}
          <h3 className="text-center text-primary font-bold text-xl underline pb-5">
            Comments
          </h3>
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
                    <button className=" bg-light hover:bg-dark hover:text-textColor px-4 py-2 border-s-5 border-primary border-2 rounded-lg text-center mt-3">
                      votes: {comment.votes}
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
                Load more...
              </button>
            </div>
          )}
        </div>
        <div className="text-center py-6">
          <button className="underline font-bold hover:text-textColor">
            add comment
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
