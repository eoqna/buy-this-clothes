import { useCallback } from "react";
import useAppStore from "../store/useAppStore";
import { removeCookie } from "./useCookie";

const useAccount = () => {
  const { isLogin, setIsLogin } = useAppStore();

  const logout = useCallback(() => {
    setIsLogin(false);
    removeCookie("login");
  }, [isLogin]);

  return {
    logout,
  };
};

export default useAccount;