import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles";
import HeroMessage from "./components/heroMessage";
import NavBar from "./components/navBar";
import { getArticles } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <HeroMessage />
      <Routes>
        <Route
          path="/articles"
          element={<Articles articles={articles} isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
