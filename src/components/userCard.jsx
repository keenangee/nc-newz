import * as api from "../utils/api";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/users";
import { loading } from "../utils/utils";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  useEffect(() => {
    api.getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const handleUserClick = (event, username) => {
    event.preventDefault();
    setSignedInUser(username);
  };

  return (
    <div>
      {isLoading && <div className="pt-20">{loading()}</div>}
      <ul className="flex flex-col md:flex-row justify-center items-center flex-wrap md:items-start gap-12 lg:mx-20 pt-16">
        {users.map((user) => {
          return (
            <li
              key={user.username}
              className={
                signedInUser === user.username
                  ? "border border-6 border-primary w-[250px] h-[250px] p-11 flex flex-col justify-center align-center items-center bg-light"
                  : " border border-6 border-primary w-[250px] h-[250px] p-11 flex flex-col justify-center align-center items-center hover:bg-light"
              }
              onClick={(event) => handleUserClick(event, user.username)}
            >
              <img
                src={user.avatar_url}
                alt={user.username}
                className="max-w-[100px] max-h-[100px]"
                onClick={(event) => handleUserClick(event, user.username)}
              />
              <p
                className="pt-2 pb-4 text-darkest"
                onClick={(event) => handleUserClick(event, user.username)}
              >
                {user.name}
              </p>
              <p
                className="font-bold"
                onClick={(event) => event.stopPropagation()}
              >
                user: <span className="text-dark">{user.username}</span>
              </p>
              {signedInUser === user.username && (
                <p className="text-primary font-bold underline">Signed In</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserCard;
