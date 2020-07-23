import { combineReducers } from "redux";

import auth from "./auth";
import idea from "./idea";
import ideaCards from "./ideaCards";
import search from "./search";
import purchase from "./purchase";

const rootReducer = combineReducers({
  auth,
  idea,
  search,
  ideaCards,
  purchase,
});

export default rootReducer;
