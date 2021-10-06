import { createContext } from "react";

const AuthContext = createContext({
  userAuthenticated: false,
  toggleAuthenticated: () => {},
});

export default AuthContext;
