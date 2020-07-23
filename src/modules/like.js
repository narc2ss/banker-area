import axios from "axios";

const LIKE_IDEA = "like/LIKE_IDEA";
const LIKE_IDEA_SUCCESS = "like/LIKE_IDEA_SUCCESS";
const LIKE_IDEA_ERROR = "like/LIKE_IDEA_ERROR";

export const likeIdea = (id) => async (dispatch) => {
  dispatch({ type: LIKE_IDEA });
  try {
    const payload = await axios.post(
      "/idea/likey",
      { idea_seq: id },
      { withCredentials: true }
    );
    dispatch({ type: LIKE_IDEA_SUCCESS, payload });
  } catch (error) {
    console.error(error);
    dispatch({ type: LIKE_IDEA_ERROR, payload: error });
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function like(state = initialState, action) {
  switch (action.type) {
    case LIKE_IDEA:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case LIKE_IDEA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case LIKE_IDEA_ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
