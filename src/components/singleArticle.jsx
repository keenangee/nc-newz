import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";

const SingleArticle = ({ setArticleName }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    api.getArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleName(article.title);
    });
  }, [article_id]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:px-20 gap-10 lg:gap-5 pt-40 sm:pt-40 md:pt-60 lg:pt40 xl:pt-20 text-textColor">
        <img
          src={article.article_img_url}
          alt="article"
          className="max-w-lg w-full h-auto self-center"
        />
        <article className="flex flex-col px-2">
          <p className="my-auto">{article.body}</p>
          <p className=" mt-auto">Written by: {article.author}</p>
        </article>
      </div>
      <div className="flex flex-row justify-around pt-10">
        <div className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg">
          <p>votes: {article.votes}</p>
        </div>
        <div className=" bg-light hover:bg-dark px-4 py-2 border-s-5 border-primary border-2 rounded-lg">
          <p>comments: {article.comment_count}</p>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
