import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const User = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const userCheck = async () => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
      navigate("/" || "/createblog" || "/newsfeed" || "/myblogs");
    } else {
      navigate("/register" || "/login");
    }
  };
  useEffect(() => {
    userCheck();
  }, []);
  return (
    <User.Provider value={{ isLogged, setIsLogged }}>{children}</User.Provider>
  );
};

export default UserProvider;
