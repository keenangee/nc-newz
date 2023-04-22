import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles";
import HeroMessage from "./components/heroMessage";
import NavBar from "./components/navBar";
import * as api from "./utils/api";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import SingleArticle from "./components/singleArticle";
import UsersList from "./components/usersList";
import NextPrev from "./components/nextPrev";
import TopicsList from "./components/topicsList";
import SortBy from "./components/sortBy";
import TopicPage from "./components/topicPage";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleName, setArticleName] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [topicQuery, setTopicQuery] = useState("");
  const [queries, setQueries] = useState({
    topic: [],
    sort_by: [],
    order: [],
    author: [],
    limit: [],
    p: [],
  });

  useEffect(() => {
    api.getArticles(queries).then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      setMaxPage(Math.ceil(articlesFromApi.total_count / 10));
      setIsLoading(false);
    });
  }, [queries]);

  return (
    <>
      <NavBar setPage={setPage} />
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
              <HeroMessage message="articles" />
              <SortBy setQueries={setQueries} />
              <Articles
                articles={articles}
                isLoading={isLoading}
                setQueries={setQueries}
                page={page}
              />
              <NextPrev page={page} setPage={setPage} maxPage={maxPage} />
            </>
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <div className="flex flex-col gap-12">
              <HeroMessage message="singleArticle" articleName={articleName} />
              <SingleArticle setArticleName={setArticleName} />
            </div>
          }
        />
        <Route
          path="/topics"
          element={
            <>
              <HeroMessage message="topics" />
              <TopicsList />
            </>
          }
        />
        <Route
          path="/topics/:topic"
          element={
            <>
              <HeroMessage message="topicPage" topicQuery={topicQuery} />
              <TopicPage
                articles={articles}
                isLoading={isLoading}
                setQueries={setQueries}
                setTopicQuery={setTopicQuery}
                page={page}
              />
              <NextPrev page={page} setPage={setPage} maxPage={maxPage} />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <HeroMessage message="users" />
              <UsersList />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
