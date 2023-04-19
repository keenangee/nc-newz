import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles";
import HeroMessage from "./components/heroMessage";
import NavBar from "./components/navBar";
import * as api from "./utils/api";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState({
    topic: [],
    sort_by: [],
    order: [],
    author: [],
    limit: [],
  });

  useEffect(() => {
    api.getArticles(queries).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [queries]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroMessage message="home" />
              <Home
                articles={articles}
                isLoading={isLoading}
                setQueries={setQueries}
              />
            </>
          }
        />
        <Route
          path="/articles"
          element={
            <>
              <HeroMessage message="articles" />{" "}
              <Articles articles={articles} isLoading={isLoading} />
            </>
          }
        />
        <Route
          path="/articles/:article_id"
          element={<Articles articles={articles} isLoading={isLoading} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
