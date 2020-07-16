import axios from "axios";

const GET_IDEAS = "ideaCard/GET_IDEAS";
const GET_IDEAS_SUCCESS = "ideaCard/GET_IDEAS_SUCCESS";
const GET_IDEAS_ERROR = "ideaCard/GET_IDEAS_ERROR";

const GET_MY_IDEAS = "ideaCard/GET_MY_IDEAS";
const GET_MY_IDEAS_SUCCESS = "ideaCard/GET_MY_IDEAS_SUCCESS";
const GET_MY_IDEAS_ERROR = "ideaCard/GET_MY_IDEAS_ERROR";

export const getIdeas = () => async (dispatch) => {
  dispatch({ type: GET_IDEAS });
  try {
    const result = await axios.get("/idea/list/likeyTop10");
    dispatch({ type: GET_IDEAS_SUCCESS, result });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_IDEAS_ERROR });
  }
};

export const myIdeas = () => async (dispatch) => {
  dispatch({ type: GET_MY_IDEAS });
  try {
    const result = await axios.get("/idea/list/my", { withCredentials: true });
    dispatch({ type: GET_MY_IDEAS_SUCCESS, result });
  } catch (error) {
    dispatch({ type: GET_MY_IDEAS_ERROR, error });
  }
};

const initialState = {
  ideas: [],
  myIdeas: [],
};

export default function ideaCards(state = initialState, action) {
  switch (action.type) {
    case GET_IDEAS:
      return { ...state };
    case GET_IDEAS_SUCCESS:
      return { ...state, ideas: action.result.data };
    case GET_IDEAS_ERROR:
      return { ...state, ideas: null };
    case GET_MY_IDEAS:
      return {
        ...state,
      };
    case GET_MY_IDEAS_SUCCESS:
      return {
        ...state,
        myIdeas: action.result.data,
      };
    default:
      return state;
  }
}
