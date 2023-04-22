import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <li className="p-6 border-2 border-dark rounded-xl my-10 hover:bg-light">
                <h3 className="text-2xl text-primary underline pb-4">
                  {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                </h3>
                <p>{topic.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicsCard;
