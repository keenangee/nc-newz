import { useEffect } from "react";
import ArticleCard from "./articleCard";

const Articles = ({ articles, isLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ArticleCard articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default Articles;
