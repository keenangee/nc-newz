import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { loading } from "../utils/utils";

const ArticleCard = ({ articles, isLoading, warmingUp }) => {
  return (
    <div>
      {isLoading && loading()}
      {warmingUp && isLoading && (
        <div className="text-center text-darkest font-bold text-2xl pt-6">
          Please wait while we warm up the api server...
        </div>
      )}
      <ul>
        {articles.map((article) => {
          return (
            <li
              key={article.article_id}
              className="flex flex-col sm:flex-row border-b-2 border-dark py-10 justify-center items-center"
            >
              <div className="w-full sm:w-80 lg:w-96 flex-shrink-0 md:ml-20 lg:ml-48">
                <Link to={`/articles/${article.article_id}`}>
                  <img
                    src={article.article_img_url}
                    alt="article"
                    className="w-full h-auto"
                  />
                </Link>
              </div>
              <div className="text-darkest flex-grow px-4 w-[85vw] md:w-auto md:mr-20 text-center md:text-left">
                <Link to={`/articles/${article.article_id}`}>
                  <h3 className="font-bold underline py-2 ">{article.title}</h3>
                </Link>
                <p>by {article.author}</p>
                <p>{formatDate(article.created_at)}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Topic: {article.topic}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCard;
