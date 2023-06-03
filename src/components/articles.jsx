import { useEffect } from "react";
import ArticleCard from "./articleCard";

const Articles = ({ articles, isLoading, warmingUp, setQueries, page }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setQueries({ sort_by: "created_at", order: "desc", p: page });
  }, [page, setQueries]);

  return (
    <div>
      <ArticleCard
        articles={articles}
        isLoading={isLoading}
        warmingUp={warmingUp}
      />
    </div>
  );
};

export default Articles;
