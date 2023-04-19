export const formatDate = (articleDate) => {
  const date = new Date(articleDate);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const dateFormatted = date.toLocaleDateString(undefined, options);
  return dateFormatted;
};
