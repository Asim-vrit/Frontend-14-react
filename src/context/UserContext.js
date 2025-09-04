import { createContext } from "react";

export const UserContext = createContext({
  user: {
    isLogin: false,
    userDetails: {},
    token: "",
  },
  setUser: () => {},
});
