import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "./articles";

const TopicPage = ({
  articles,
  isLoading,
  setQueries,
  setTopicQuery,
  page,
}) => {
  const { topic } = useParams();

  useEffect(() => {
    setTopicQuery(topic);
  }, [topic, setTopicQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQueries({ sort_by: "created_at", order: "desc", p: page, topic });
  }, [topic, setQueries, page]);

  return (
    <div>
      <Articles
        articles={articles}
        isLoading={isLoading}
        setQueries={setQueries}
      />
    </div>
  );
};

export default TopicPage;
