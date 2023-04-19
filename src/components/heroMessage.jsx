import Typed from "react-typed";

const HeroMessage = ({ message }) => {
  const checkHeaderText = (message) => {
    if (message === "home") {
      return "NC Newz";
    } else {
      return "Articles";
    }
  };

  const checkContentText = (message) => {
    if (message === "home") {
      return "Welcome to the realest news";
    } else {
      return "All the news that's fit to print";
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
    <header>
      <div className="max-w-[800px] mt-10 lg:pt-20 w-full h-[30vw] mx-auto text-center flex flex-col justify-start">
        <h2 className="md:text-7xl sm:text-6xl text-3xl text-dark p-3">
          {checkHeaderText(message)}
        </h2>
        <p className="text-darkest font-bold md:text-4xl sm:text-3xl text-xl">
          {checkContentText(message)}
        </p>
        <div className="md:text-3xl sm:text-2xl text-l">
          {checkTypedText(message)}
        </div>
        <div className="mt-8">
          <hr />
        </div>
      </div>
    </header>
  );
};

export default HeroMessage;
