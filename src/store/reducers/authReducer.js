import { getLocalStorageService } from "../../service/LocalStorageService";
import { LOGIN, LOGOUT } from "../action-types";


const initialState = {
  authenticatedUser: getLocalStorageService() || null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticatedUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        authenticatedUser: action.payload,
      };
    default:
      return state;
  }
};
