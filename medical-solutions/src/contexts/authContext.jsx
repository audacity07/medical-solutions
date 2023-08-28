import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  function handleUserInfo(val) {
    setUserInfo({
      ...userInfo,
      ...val,
    });
  }
  // console.log(userInfo);

  function login() {
    setIsAuth(true);
  }

  function logout() {
    setIsAuth(false);
    setUserInfo({});
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, login, logout, userInfo, setUserInfo, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
