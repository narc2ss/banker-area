const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

const initialState = {
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
