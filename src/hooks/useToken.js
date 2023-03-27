import { useState } from "react";
import { getLocalStorageService, setLocalStorageService } from "../service/LocalStorageService";

export default function useToken() {
  let getToken = () => {
   
    let userToken = getLocalStorageService();
    return userToken;
  };

  let [token, setToken] = useState(getToken());

  let saveToken = (userToken) => {
   setLocalStorageService(userToken)
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
