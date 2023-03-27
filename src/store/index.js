import { reducers } from "./reducers";
import Thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(Thunk));


export const configureStore = (preState) => {
  const store = createStore(reducers(), preState, composedEnhancer);

  return { store: store };
};
