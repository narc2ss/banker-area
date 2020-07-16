import { combineReducers } from "redux";

import auth from "./auth";
import counter from "./counter";
import idea from "./idea";

const rootReducer = combineReducers({
  auth,
  idea,
  counter,
});

export default rootReducer;
