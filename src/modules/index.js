import { combineReducers } from "redux";

import auth from "./auth";
import idea from "./idea";
import ideaCards from "./ideaCards";
import search from "./search";
import purchase from "./purchase";
import my from "./my";
import like from "./like";

const rootReducer = combineReducers({
  auth,
  idea,
  search,
  ideaCards,
  purchase,
  my,
});

export default rootReducer;
