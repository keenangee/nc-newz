import CommentsCard from "./commentsCard";

const Comments = ({
  articleId,
  commentsOpen,
  totalComments,
  setTotalComments,
}) => {
  return (
    <CommentsCard
      articleId={articleId}
      commentsOpen={commentsOpen}
      totalComments={totalComments}
      setTotalComments={setTotalComments}
    />
  );
};

export default Comments;
