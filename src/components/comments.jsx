import CommentsCard from "./commentsCard";
import { useState } from "react";
import AddComment from "./addComment";

const Comments = ({
  articleId,
  commentsOpen,
  totalComments,
  setTotalComments,
}) => {
  const [addComment, setAddComment] = useState(false);

  const handleAddComment = () => {
    setAddComment(true);
  };

  return (
    <>
      {addComment && (
        <AddComment
          setAddComment={setAddComment}
          articleId={articleId}
          setTotalComments={setTotalComments}
        />
      )}
      <div className="flex flex-col mx-6 text-dark border-4 border-double border-darkest shadow-sm shadow-textColor md:w-[94vw]">
        <CommentsCard
          articleId={articleId}
          commentsOpen={commentsOpen}
          totalComments={totalComments}
          setTotalComments={setTotalComments}
        />
        <div className="text-center py-6">
          <button
            className="text-textColor bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg"
            onClick={handleAddComment}
          >
            add comment
          </button>
        </div>
      </div>
    </>
  );
};

export default Comments;
