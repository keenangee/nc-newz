import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
          <a href="/articles">Articles</a>
        </li>
        <li className="text-2xl font-bold p-4">
          <Link to="/topics">Topics</Link>
        </li>
        <li className="text-2xl font-bold p-4">
          <Link to="/users">Users</Link>
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
            <a href="/articles">Articles</a>
          </li>
          <li className="text-2xl font-bold px-4 py-12 border-b">
            <a href="/topics">Topics</a>
          </li>
          <li className="text-2xl font-bold px-4 py-12">
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
