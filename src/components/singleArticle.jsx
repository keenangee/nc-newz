import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { RotatingLines } from "react-loader-spinner";
import Comments from "./comments";

const SingleArticle = ({ setArticleName }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleName(article.title);
      setTotalComments(article.comment_count);
      setIsLoading(false);
    });
  }, [article_id, setArticleName]);

  const handleComments = () => {
    setCommentsOpen((currCommentsOpen) => !currCommentsOpen);
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
        <div className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg">
          <p>votes: {article.votes}</p>
        </div>
        <div className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg">
          <button onClick={handleComments}>
            {totalComments === 0
              ? "Add Comment" //functionality to come
              : commentsOpen
              ? `Hide Comments`
              : `Comments: ${totalComments}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
