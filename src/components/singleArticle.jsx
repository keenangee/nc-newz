import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { RotatingLines } from "react-loader-spinner";
import Comments from "./comments";
import Votes from "./votes";

const SingleArticle = ({ setArticleName }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [totalComments, setTotalComments] = useState(0);
  const [votesOpen, setVotesOpen] = useState(false);
  const [votes, setVotes] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);
  const [showThumbsDown, setShowThumbsDown] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleName(article.title);
      setTotalComments(article.comment_count);
      setVotes(article.votes);
      setIsLoading(false);
    });
  }, [article_id, setArticleName]);

  const handleComments = () => {
    setCommentsOpen((currCommentsOpen) => !currCommentsOpen);
  };

  const handleVotes = () => {
    setVotesOpen((currVotesOpen) => !currVotesOpen);
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-row justify-center align-middle mt-40">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}

      {votesOpen && (
        <Votes
          setVotesOpen={setVotesOpen}
          setVotes={setVotes}
          article_id={article_id}
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

      <div className="flex flex-col lg:flex-row lg:px-20 gap-10 lg:gap-5  text-textColor">
        <img
          src={article.article_img_url}
          alt="article"
          className="max-w-lg w-full h-auto self-center"
        />
        <article className="flex flex-col px-2">
          <p className="my-auto">{article.body}</p>
          <p className=" mt-auto pt-5 text-darkest">
            Written by: {article.author}
          </p>
        </article>
      </div>

      {commentsOpen && (
        <div className="flex flex-col lg:flex-row lg:px-20 gap-10 lg:gap-5  text-textColor">
          <Comments
            articleId={article_id}
            commentsOpen={commentsOpen}
            totalComments={totalComments}
            setTotalComments={setTotalComments}
          />
        </div>
      )}

      <div className="flex flex-row justify-around">
        <button
          className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg"
          button
          onClick={handleVotes}
        >
          votes: {votes}
        </button>

        <button
          className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg"
          onClick={handleComments}
        >
          {totalComments === 0
            ? "Add first comment" //functionality to come
            : commentsOpen
            ? `Hide Comments`
            : `Comments: ${totalComments}`}
        </button>
      </div>
    </>
  );
};

export default SingleArticle;
