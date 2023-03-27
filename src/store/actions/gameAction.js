import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../config";
import { DELETE_GAME, GETGAME } from "../action-types";


export const getGames = (signal) => {
  return async (dispatch) => {
    try {
      await axios.get(`${URL}/games`, { signal }).then((d) => {
        dispatch({
          type: GETGAME,
          payload: d.data,
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  };
};

export const addGame = (p,navigate) => {

  return async (dispatch) => {
    try {
      await axios
        .post(`${URL}/games`,p)
        .then((d) => {
           axios.get(`${URL}/games`).then((d) => {
            dispatch({
              type: GETGAME,
              payload: d.data,
            });
             
            toast.success("Successfully,Add Game!")
            navigate("/")
          });
        });
  
    } catch (e) {
      console.log("Error", e);
    }
  };
}
export const deleteGame = (p) => {
  return async (dispatch,) => {
    try {
      await axios.delete(`${URL}/games/${p.id}`).then((data) => {
        toast.success("Successfully,Remove Game!")
        dispatch({
          type: DELETE_GAME,
          payload: p,
        });
      });
    } catch (e) {
      console.log("Error",e)
    }
  };
};
