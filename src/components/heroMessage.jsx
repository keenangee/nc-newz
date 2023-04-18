import Typed from "react-typed";

const HeroMessage = () => {
  return (
    <header>
      <div className="max-w-[800px] mt-10 w-full h-screen mx-auto text-center flex flex-col justify-start">
        <h2 className="md:text-7xl sm:text-6xl text-3xl text-dark p-3">
          NC Newz
        </h2>
        <p className="text-darkest font-bold md:text-4xl sm:text-3xl text-xl">
          Welcome to the realest news
        </p>
        <div className="md:text-3xl sm:text-2xl text-l">
          <p className="text-dark p-3">
            Get the news&nbsp;
            <Typed
              strings={["fast", "reliable", "accurate", "real"]}
              typeSpeed={120}
              backSpeed={140}
              loop={true}
              className="text-light font-bold"
            />
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroMessage;
