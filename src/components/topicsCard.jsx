import { useState, useEffect } from "react";
import * as api from "../utils/api";

const TopicsCard = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center pt-8">
      <ul>
        {topics.map((topic) => {
          return (
            <li
              key={topic.slug}
              className="p-6 border-2 border-dark rounded-xl my-10 hover:bg-light"
            >
              <h3 className="text-2xl text-primary underline pb-4">
                {topic.slug}
              </h3>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicsCard;
