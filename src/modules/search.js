import axios from "axios";

const IDEA_SEARCH = "search/IDEA_SEARCH";
const IDEA_SEARCH_SUCCESS = "search/IDEA_SEARCH_SUCCESS";
const IDEA_SEARCH_ERROR = "search/IDEA_SEARCH_ERROR";

export const getSearchIdeas = (keyword, history) => async (dispatch) => {
  dispatch({ type: IDEA_SEARCH });
  console.log("idea_search reducer");
  try {
    const result = await axios.get(
      `/idea/list/search?type=searchWord&keyword=${keyword}`
    );
    dispatch({ type: IDEA_SEARCH_SUCCESS, result });
    history.push(`/search/${keyword}`);
  } catch (error) {
    dispatch({ type: IDEA_SEARCH_ERROR });
  }
};

const initialState = {
  ideaCardsOfKeyword: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case IDEA_SEARCH_SUCCESS:
      return {
        ...state,
        ideaCardsOfKeyword: action.result.data,
      };
    default:
      return state;
  }
}
