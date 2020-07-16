import { combineReducers } from "redux";

import auth from "./auth";
import counter from "./counter";
import idea from "./idea";
import ideaCards from "./ideaCards";
import search from "./search";

const rootReducer = combineReducers({
  auth,
  idea,
  search,
  ideaCards,
  counter,
});

export default rootReducer;
