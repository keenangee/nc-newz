import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";

const ArticleCard = ({ articles, isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="flex flex-row justify-center align-middle">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
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
              <div className="text-darkest flex-grow px-4 md:mr-20">
                <Link to={`/articles/${article.article_id}`}>
                  <h3 className="font-bold underline py-2">{article.title}</h3>
                </Link>
                <p>by {article.author}</p>
                <p>{formatDate(article.created_at)}</p>
                <p>Topic: {article.topic}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCard;
