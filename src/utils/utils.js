import { RotatingLines } from "react-loader-spinner";

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

export const loading = () => {
  return (
    <div className="flex flex-row justify-center align-middle">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
