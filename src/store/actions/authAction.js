import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../config";
import { removeLocalStorageService } from "../../service/LocalStorageService";
import { GETUERS, LOGIN, LOGOUT } from "../action-types";

export const register = (payload, navigate) => {
  return async () => {
    try {
      await axios.post(`${URL}/users`, payload).then((d) => {
        navigate("/signin");
        toast.success("Successfully,Registered!")

      });
    } catch (e) {
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      await axios.get(`${URL}/users`).then((d) =>
      dispatch({
        type: GETUERS,
        payload: d.data,
      })
    );
    } catch (e) {
      console.log("Errors",e);
   }
  };
};

export const login = (paylaod, navigate, setToken) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: paylaod,
    });
    toast.success("Successfully,Logined!")

    setToken(paylaod);
    navigate("/");
  };
};

export const logOut = (navigate) => {
  return (dispatch) => {
    dispatch({
      type:LOGOUT,
      payload: null,
    });
    toast.success("Successfully,Logouted!")

    removeLocalStorageService()
    navigate("/");
  };
};
