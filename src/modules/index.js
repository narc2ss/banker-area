import { combineReducers } from "redux";

import auth from "./auth";
import counter from "./counter";

const rootReducer = combineReducers({
  auth,
  counter,
});

export default rootReducer;
