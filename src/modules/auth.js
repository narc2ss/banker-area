const LOG_IN = "auth/LOG_IN";
const LOG_OUT = "auth/LOG_OUT";

export const logIn = (user) => ({ type: LOG_IN, user });
export const logOut = () => ({ type: LOG_OUT });

const initialState = {
  isLoggedIn: false,
  user: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true, user: action.user };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: {} };
    default:
      return state;
  }
}
