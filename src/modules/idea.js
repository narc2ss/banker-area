import axios from "axios";

const CREATE_IDEA = "idea/CREATE_IDEA";
const CREATE_IDEA_SUCCESS = "idea/CREATE_IDEA_SUCCESS";
const CREATE_IDEA_ERROR = "idea/CREATE_IDEA_ERROR";

const GET_IDEA = "idea/GET_IDEA";
const GET_IDEA_SUCCESS = "idea/GET_IDEA_SUCCESS";
const GET_IDEA_ERROR = "idea/GET_IDEA_ERROR";

const CLICK_LIKE_IDEA = "idea/CLICK_LIKE_IDEA";
const CLICK_LIKE_IDEA_SUCCESS = "idea/CLICK_LIKE_IDEA_SUCCESS";
const CLICK_LIKE_IDEA_ERROR = "idea/CLICK_LIKE_IDEA_ERROR";

export const createIdea = (idea) => async (dispatch) => {
  const {
    banker,
    writeData,
    ideaName,
    shortDescription,
    inconvenient,
    purpose,
    competitiveEdge,
    differentiation,
    marketAnalysis,
  } = initialState;
  await dispatch({ type: CREATE_IDEA });
  try {
    await axios.post(
      "/idea/post",
      {
        project_name: ideaName,
        short_description: shortDescription,
        category: "생활",
        goodsList: [
          {
            goods_type: "motivation",
            open_status: inconvenient.view,
            content: inconvenient.content,
            price: inconvenient.price,
          },
          {
            goods_type: "need",
            open_status: purpose.view,
            content: purpose.content,
            price: purpose.price,
          },
          {
            goods_type: "strategy",
            open_status: competitiveEdge.view,
            content: competitiveEdge.content,
            price: competitiveEdge.price,
          },
          {
            goods_type: "market_analysis",
            open_status: marketAnalysis.view,
            content: marketAnalysis.content,
            price: marketAnalysis.price,
          },
          {
            goods_type: "competitiveness",
            open_status: differentiation.view,
            content: differentiation.content,
            price: differentiation.price,
          },
        ],
      },
      { withCredentials: true }
    );
  } catch (error) {}
};

export const getIdea = (id) => async (dispatch) => {
  dispatch({ type: GET_IDEA });
  try {
    const result = await axios.get(`/idea/detail?idea_seq=${id}`, {
      withCredentials: true,
    });
    dispatch({ type: GET_IDEA_SUCCESS, result });
  } catch (error) {
    dispatch({ type: GET_IDEA_ERROR, error });
  }
};

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

const initialState = {
  banker: "narciss",
  writeData: "2020년 7월 3일",
  ideaName: "TV리모컨 찾기",
  shortDescription:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  totalPriceOfIdea: 5000000,
  inconvenient: {
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    view: false,
    price: 1000000,
  },
  purpose: {
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    view: false,
    price: 1000000,
  },
  competitiveEdge: {
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    view: false,
    price: 1000000,
  },
  differentiation: {
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    view: false,
    price: 1000000,
  },
  marketAnalysis: {
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    view: false,
    price: 1000000,
  },
  like: 0,
  view: 0,
  idea: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function idea(state = initialState, action) {
  switch (action.type) {
    case GET_IDEA:
      return {
        ...state,
        idea: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_IDEA_SUCCESS:
      return {
        ...state,
        idea: {
          loading: false,
          data: action.result.data,
          error: null,
        },
      };
    case GET_IDEA_ERROR:
      return {
        ...state,
        idea: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case CLICK_LIKE_IDEA:
      return {
        ...state,
        idea: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CLICK_LIKE_IDEA_SUCCESS:
      return {
        ...state,
        idea: {
          loading: false,
          data: {
            ...state,
          },
          error: null,
        },
      };
    case CLICK_LIKE_IDEA_ERROR:
      return {
        ...state,
        idea: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
