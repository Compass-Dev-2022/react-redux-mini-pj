import { GETUERS } from "../action-types";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GETUERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
