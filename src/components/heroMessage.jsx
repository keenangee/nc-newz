import Typed from "react-typed";

const HeroMessage = ({ message, articleName }) => {
  const checkHeaderText = (message) => {
    if (message === "home") {
      return "NC Newz";
    } else if (message === "articles") {
      return "Articles";
    } else if (message === "singleArticle") {
      return articleName;
    }
  };

  const checkContentText = (message) => {
    if (message === "home") {
      return "Welcome to the realest news";
    } else if (message === "articles") {
      return "All the news that's fit to print";
    } else if (message === "singleArticle") {
      return "🔻 Check out this article 🔻";
    }
  };

  const checkTypedText = (message) => {
    if (message === "home") {
      return (
        <p className="text-dark p-3">
          Get news&nbsp;
          <Typed
            strings={[
              "fast",
              "reliably",
              "accurately",
              "thats real",
              "you can trust",
            ]}
            typeSpeed={80}
            backSpeed={100}
            loop={true}
            className="text-light font-bold"
          />
        </p>
      );
    } else {
      return "";
    }
  };

  return (
    <header className=" pt-[10vh]">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-start">
        <h2 className="md:text-7xl sm:text-6xl text-3xl text-dark p-3">
          {checkHeaderText(message)}
        </h2>
        <p className="text-darkest font-bold md:pt-6 md:text-4xl sm:text-3xl text-xl">
          {checkContentText(message)}
        </p>
        <div className="md:text-3xl sm:text-2xl text-l">
          {checkTypedText(message)}
        </div>
        <div className="pt-8">
          <hr />
        </div>
      </div>
    </header>
  );
};

export default HeroMessage;
