import { combineReducers } from "redux";

import user from "./user";
import todos from "./totos";

const rootReducer = combineReducers({
  user,
  todos,
});

export default rootReducer;
