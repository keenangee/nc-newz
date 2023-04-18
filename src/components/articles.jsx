import ArticleCard from "./articleCard";

const Articles = ({ articles, isLoading }) => {
  return (
    <div>
      <ArticleCard articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default Articles;
