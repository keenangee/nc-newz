import { RotatingLines } from "react-loader-spinner";

const ArticleCard = ({ articles, isLoading }) => {
  const formatDate = (articleDate) => {
    const date = new Date(articleDate);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const dateFormatted = date.toLocaleDateString(undefined, options);
    return dateFormatted;
  };

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
              <div>
                <img
                  src={article.article_img_url}
                  alt="article image"
                  className="md:max-w-lg"
                />
              </div>
              <div className="text-darkest p-4">
                <h3 className="font-bold underline py-2">{article.title}</h3>
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
