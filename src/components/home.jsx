import { useEffect } from "react";
import Articles from "./articles";

const Home = ({ articles, isLoading, warmingUp, setQueries }) => {
  useEffect(() => {
    setQueries({ sort_by: "created_at", limit: 4, order: "desc" });
  }, [setQueries]);

  return (
    <div className="my-12 sm:my-8 md:my-6">
      <h3 className=" text-2xl text-center text-primary font-bold underline italic md:mb-3 flex flex-col justify-center align-middle">
        Latest Articles
      </h3>
      <Articles
        articles={articles}
        isLoading={isLoading}
        warmingUp={warmingUp}
        setQueries={setQueries}
      />
      <div className="text-center pt-20">
        <a href="/articles">
          <button className="bg-primary text-lightest font-bold py-2 px-4 rounded text-center hover:text-light">
            More Articles
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
