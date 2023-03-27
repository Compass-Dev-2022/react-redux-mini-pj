import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

export const reducers = () =>
  combineReducers({
    users: userReducer,
    games: gameReducer,
    authenticatedUser: authReducer,
  });
