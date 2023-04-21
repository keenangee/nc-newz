import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-newz.onrender.com/api",
});

export const getArticles = async ({
  topic,
  sort_by,
  order,
  author,
  limit,
  p,
}) => {
  const response = await api.get("/articles", {
    params: {
      topic,
      sort_by,
      order,
      author,
      limit,
      p,
    },
  });
  return {
    articles: response.data.articles,
    total_count: response.data.total_count,
  };
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

export const patchVotes = async (article_id, inc_votes) => {
  const response = await api.patch(`/articles/${article_id}`, {
    inc_votes,
  });
  return response.data.article;
};

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data.users;
};

export const postComment = async (article_id, username, body) => {
  console.log(article_id, username, body);
  const response = await api.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
  return response.data.comment;
};

export const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data.topics;
};
