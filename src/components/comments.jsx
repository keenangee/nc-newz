import * as api from "../utils/api";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/utils";

const Comments = ({ articleId, commentsOpen }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalComments, setTotalComments] = useState(0);
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
    <div className="flex flex-col mx-6 text-dark border-4 border-double border-darkest">
      <div className="p-6">
        {isLoading && <p>Loading...</p>}
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
                <div className=" bg-light hover:bg-dark hover:text-textColor px-4 py-2 border-s-5 border-primary border-2 rounded-lg w-[100px] text-center mt-3">
                  <p>votes: {comment.votes}</p>
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
  );
};

export default Comments;
