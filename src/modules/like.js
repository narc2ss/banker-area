const CLICK_LIKE_IDEA = "idea/CLICK_LIKE_IDEA";
const CLICK_LIKE_IDEA_SUCCESS = "idea/CLICK_LIKE_IDEA_SUCCESS";
const CLICK_LIKE_IDEA_ERROR = "idea/CLICK_LIKE_IDEA_ERROR";

export const likeIdea = (id) => async (dispatch) => {
  dispatch({ type: CLICK_LIKE_IDEA });
  try {
    const bankerList = await axios.post(
      "/idea/likey",
      { idea_seq: id },
      { withCredentials: true }
    );
    dispatch({ type: CLICK_LIKE_IDEA_SUCCESS, payload: bankerList });
  } catch (error) {
    console.error(error);
    dispatch({ type: CLICK_LIKE_IDEA_ERROR, error });
  }
};

export default function like() {}
