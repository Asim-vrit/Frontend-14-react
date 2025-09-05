import { useState } from "react";
import { UserContext } from "../context/UserContext";

const token = localStorage.getItem("token");
const userLocal = localStorage.getItem("user");

function UserContextProvider(props) {
  const [user, setUser] = useState({
    isLogin: !!token,
    userDetails: userLocal ? JSON.parse(userLocal) : {},
    token: token,
  });
  const [theme, setTheme] = useState("light");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({ isLogin: false, userDetails: {}, token: "" });
  }
  return (
    <UserContext.Provider value={{ user, setUser, theme, setTheme, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
