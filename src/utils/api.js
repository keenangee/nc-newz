import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-newz.onrender.com/api",
});

export const getArticles = async ({ topic, sort_by, order, author, limit }) => {
  const response = await api.get("/articles", {
    params: {
      topic,
      sort_by,
      order,
      author,
      limit,
    },
  });
  return response.data.articles;
};

export const getSingleArticle = async (article_id) => {
  const response = await api.get(`/articles/${article_id}`);
  return response.data.article;
};