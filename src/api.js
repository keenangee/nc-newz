import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-newz.onrender.com/api",
});

export const getArticles = async (topic, sort_by, order, author) => {
  const response = await api.get("/articles", {
    params: {
      topic,
      sort_by,
      order,
      author,
    },
  });
  return response.data.articles;
};
