import axios from "axios";

const LOG_IN = "auth/LOG_IN";
const LOG_IN_SUCCESS = "auth/LOG_IN_SUCCESS";
const LOG_IN_ERROR = "auth/LOG_IN_ERROR";

export const login = (id, password) => async (dispatch) => {
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
  } catch (error) {
    console.log(error);
    dispatch({ type: LOG_IN_ERROR, error });
  }
};

const initialState = {
  user: null,
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
    default:
      return state;
  }
}
