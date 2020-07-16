import { combineReducers } from "redux";

import auth from "./auth";
import counter from "./counter";
import idea from "./idea";
import ideaCards from "./ideaCards";

const rootReducer = combineReducers({
  auth,
  idea,
  ideaCards,
  counter,
});

export default rootReducer;
