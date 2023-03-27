import { DELETE_GAME, GETGAME } from "../action-types";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GETGAME:

      return {
        ...state,
        games: action.payload,
      };
    case DELETE_GAME:

      return {
        ...state,
        games: state.games.filter((e)=> e.id !== action.payload.id),
      };
    
    default:
      return state;
  }
};
