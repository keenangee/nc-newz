import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/users";

const NavBar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { signedInUser } = useContext(UserContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleArticlePage = () => {
    setPage(1);
  };

  return (
    <div className="flex justify-between items-center text-darkest h-24 max-w-[1240px] mx-auto px-6">
      <h1 className="w-full text-4xl font-bold text-primary">
        <Link to="/">{!isOpen ? "NCN" : ""}</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="text-2xl font-bold p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl font-bold p-4">
          <Link to="/articles" onClick={handleArticlePage}>
            Articles
          </Link>
        </li>
        <li className="text-2xl font-bold p-4">
          <Link to="/topics">Topics</Link>
        </li>
        <li className="text-2xl font-bold p-4 w-fit text-primary">
          <Link to="/users">{signedInUser}</Link>
        </li>
      </ul>
      <div className="z-10 block md:hidden" onClick={handleOpen}>
        {!isOpen ? (
          <AiOutlineMenu size={40} className=" cursor-pointer" />
        ) : (
          <AiOutlineCloseCircle size={40} className=" cursor-pointer" />
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed right-0 top-0 w-[85%] h-full border-l border-l-dark bg-light ease-in-out duration-300"
            : "fixed right-[-100%] top-0 w-[85%] h-full border-l border-l-dark bg-light ease-in-out duration-300"
        }
      >
        <h1 className="w-full text-4xl font-bold text-primary m-6">NCN</h1>

        <ul className="uppercase items-center flex flex-col justify-around pt-[15%]">
          <li className="text-2xl font-bold px-4 py-12 border-b">
            <Link to="/" onClick={handleOpen}>
              Home
            </Link>
          </li>
          <li className="text-2xl font-bold px-4 py-12 border-b">
            <Link
              to="/articles"
              onClick={() => {
                handleOpen();
                handleArticlePage();
              }}
            >
              Articles
            </Link>
          </li>
          <li className="text-2xl font-bold px-4 py-12 border-b">
            <Link to="/topics" onClick={handleOpen}>
              Topics
            </Link>
          </li>
          <li className="text-2xl font-bold px-4 py-12 text-primary">
            <Link to="/users" onClick={handleOpen}>
              {signedInUser}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
