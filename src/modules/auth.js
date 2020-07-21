import axios from "axios";

const LOG_IN = "auth/LOG_IN";
const LOG_IN_SUCCESS = "auth/LOG_IN_SUCCESS";
const LOG_IN_ERROR = "auth/LOG_IN_ERROR";

const LOG_OUT = "auth/LOG_OUT";
const LOG_OUT_SUCCESS = "auth/LOG_OUT_SUCCESS";
const LOG_OUT_ERROR = "auth/LOG_OUT_ERROR";

export const login = (id, password, history) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const user = await axios.post(
      "/users/account/signin",
      {
        id,
        password,
      },
      { withCredentials: true }
    );
    dispatch({ type: LOG_IN_SUCCESS, user });
    window.localStorage.user = id;
    history.push("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: LOG_IN_ERROR, error });
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: LOG_OUT });
  try {
    await axios.post("/users/account/logout", null, { withCredentials: true });
    dispatch({ type: LOG_OUT_SUCCESS });
    window.localStorage.removeItem("user");
    history.push("/");
  } catch (error) {
    dispatch({ type: LOG_OUT_ERROR });
  }
};

const initialState = {
  user: window.localStorage.user,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.user.data,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case LOG_OUT:
      return {
        ...state,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
