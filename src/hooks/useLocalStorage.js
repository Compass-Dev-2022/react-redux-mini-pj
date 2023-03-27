import { useEffect, useState } from "react";
import { getLocalStorageService } from "../service/LocalStorageService";

export const useLocalStorage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (token) {
      setToken(getLocalStorageService);
    }
  }, [token]);

  return [token];
};
