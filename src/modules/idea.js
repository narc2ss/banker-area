import axios from "axios";

const TEMP_IDEA_NAME = "idea/TEMP_IDEA_NAME";
const TEMP_SHORT_DESCRIPTION = "idea/SHORT_DESCRIPTION";
const TEMP_INCONVENIENT = "idea/TEMP_INCONVENIENT";
const TEMP_PURPOSE = "idea/TEMP_PURPOSE";
const TEMP_COMPETITIVE_EDGE = "idea/TEMP_COMPETITIVE_EDGE";
const TEMP_DIFFERENTIATION = "idea/TEMP_DIFFERENTIATION";
const TEMP_MARKET_ANALYSIS = "idea/TEMP_MARKET_ANALYSIS";

const CREATE_IDEA = "idea/CREATE_IDEA";
const CREATE_IDEA_SUCCESS = "idea/CREATE_IDEA_SUCCESS";
const CREATE_IDEA_ERROR = "idea/CREATE_IDEA_ERROR";

const GET_IDEA = "idea/GET_IDEA";
const GET_IDEA_SUCCESS = "idea/GET_IDEA_SUCCESS";
const GET_IDEA_ERROR = "idea/GET_IDEA_ERROR";

const CLICK_LIKE_IDEA = "idea/CLICK_LIKE_IDEA";
const CLICK_LIKE_IDEA_SUCCESS = "idea/CLICK_LIKE_IDEA_SUCCESS";
const CLICK_LIKE_IDEA_ERROR = "idea/CLICK_LIKE_IDEA_ERROR";

export const tempIdea = (data) => (dispatch) => {
  switch (data.type) {
    case "ideaName": {
      dispatch({ type: TEMP_IDEA_NAME, payload: data });
      return;
    }
    case "shortDescription": {
      dispatch({ type: TEMP_SHORT_DESCRIPTION, payload: data });
      return;
    }
    case "motivation": {
      dispatch({ type: TEMP_INCONVENIENT, payload: data });
      return;
    }
    case "need": {
      dispatch({ type: TEMP_PURPOSE, payload: data });
      return;
    }
    case "strategy": {
      dispatch({ type: TEMP_COMPETITIVE_EDGE, payload: data });
      return;
    }
    case "competitiveness": {
      dispatch({ type: TEMP_DIFFERENTIATION, payload: data });
      return;
    }
    case "market_analysis": {
      dispatch({ type: TEMP_MARKET_ANALYSIS, payload: data });
      return;
    }
    default:
      return;
  }
};

export const createIdea = ({ idea, banker }) => async (dispatch) => {
  dispatch({ type: CREATE_IDEA });
  console.log(idea);
  try {
    const result = await axios.post(
      "/idea/post",
      {
        banker_id: banker,
        project_name: idea.ideaName,
        short_description: idea.shortDescription,
        category: "생활",
        goodsList: [
          {
            goods_type: "motivation",
            open_status: idea.inconvenient.view,
            content: idea.inconvenient.content,
            price: idea.inconvenient.price,
          },
          {
            goods_type: "need",
            open_status: idea.purpose.view,
            content: idea.purpose.content,
            price: idea.purpose.price,
          },
          {
            goods_type: "strategy",
            open_status: idea.competitiveEdge.view,
            content: idea.competitiveEdge.content,
            price: idea.competitiveEdge.price,
          },
          {
            goods_type: "market_analysis",
            open_status: idea.marketAnalysis.view,
            content: idea.marketAnalysis.content,
            price: idea.marketAnalysis.price,
          },
          {
            goods_type: "competitiveness",
            open_status: idea.differentiation.view,
            content: idea.differentiation.content,
            price: idea.differentiation.price,
          },
        ],
      },
      { withCredentials: true }
    );
    dispatch({ type: CREATE_IDEA_SUCCESS, result });
  } catch (error) {
    console.error(error);
    dispatch({ type: CREATE_IDEA_ERROR });
  }
};

export const getIdea = (id) => async (dispatch) => {
  dispatch({ type: GET_IDEA });
  try {
    const result = await axios.get(`/idea/detail?idea_seq=${id}`, {
      withCredentials: true,
    });
    dispatch({ type: GET_IDEA_SUCCESS, payload: result });
  } catch (error) {
    console.error(error);
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
  temp: {
    banker: localStorage.user,
    ideaName: "",
    shortDescription: "",
    totalPriceOfIdea: 0,
    inconvenient: {
      content: "",
      blur: false,
      price: 0,
    },
    purpose: {
      content: "",
      blur: false,
      price: 0,
    },
    competitiveEdge: {
      content: "",
      blur: false,
      price: 0,
    },
    differentiation: {
      content: "",
      blur: false,
      price: 0,
    },
    marketAnalysis: {
      content: "",
      blur: false,
      price: 0,
    },
  },
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
          data: action.payload.data,
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
    case TEMP_IDEA_NAME:
      console.log(action.payload.data);
      return {
        ...state,
        temp: {
          ...state.temp,
          ideaName: action.payload.data,
        },
      };
    case TEMP_SHORT_DESCRIPTION:
      return {
        ...state,
        temp: {
          ...state.temp,
          shortDescription: action.payload.data,
        },
      };
    case TEMP_INCONVENIENT:
      return {
        ...state,
        temp: {
          ...state.temp,
          inconvenient: {
            content: action.payload.data,
            open_status: action.payload.view,
            price: action.payload.price,
          },
          totalPriceOfIdea: (state.temp.totalPriceOfIdea +=
            action.payload.price),
        },
      };
    case TEMP_PURPOSE:
      return {
        ...state,
        temp: {
          ...state.temp,
          purpose: {
            content: action.payload.data,
            open_status: action.payload.view,
            price: action.payload.price,
          },
          totalPriceOfIdea: (state.temp.totalPriceOfIdea +=
            action.payload.price),
        },
      };
    case TEMP_COMPETITIVE_EDGE:
      return {
        ...state,
        temp: {
          ...state.temp,
          competitiveEdge: {
            content: action.payload.data,
            open_status: action.payload.view,
            price: action.payload.price,
          },
          totalPriceOfIdea: (state.temp.totalPriceOfIdea +=
            action.payload.price),
        },
      };
    case TEMP_DIFFERENTIATION:
      return {
        ...state,
        temp: {
          ...state.temp,
          differentiation: {
            content: action.payload.data,
            open_status: action.payload.view,
            price: action.payload.price,
          },
          totalPriceOfIdea: (state.temp.totalPriceOfIdea +=
            action.payload.price),
        },
      };
    case TEMP_MARKET_ANALYSIS:
      return {
        ...state,
        temp: {
          ...state.temp,
          marketAnalysis: {
            content: action.payload.data,
            open_status: action.payload.view,
            price: action.payload.price,
          },
          totalPriceOfIdea: (state.temp.totalPriceOfIdea +=
            action.payload.price),
        },
      };
    case CREATE_IDEA_SUCCESS:
      return {
        ...state,
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
