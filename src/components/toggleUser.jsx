import { useContext } from "react";
import { UserContext } from "../context/users";

const ToggleUser = () => {
  const { signedInUser } = useContext(UserContext);
  console.log(signedInUser);

  return <p>Signed in: {signedInUser}</p>;
};

export default ToggleUser;
