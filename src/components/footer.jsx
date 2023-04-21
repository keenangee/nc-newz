const Footer = () => {
  return (
    <footer className=" mt-auto w-full text-center pt-14 pb-6">
      <p>
        Created with{" "}
        <a
          href="https://react.dev/"
          className=" text-darkest hover:text-primary"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className=" text-darkest hover:text-primary"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          Tailwind
        </a>{" "}
        © 2023
      </p>
    </footer>
  );
};

export default Footer;
