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

export const getArticleById = async (article_id) => {
  const response = await api.get(`/articles/${article_id}`);
  return response.data.article;
};

export const getCommentsByArticleId = async (article_id, limit, p) => {
  const response = await api.get(`/articles/${article_id}/comments`, {
    params: {
      limit,
      p,
    },
  });
  return response.data;
};
