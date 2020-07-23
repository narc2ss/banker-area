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

const PURCHASE_ALL_CHECKED = "idea/PURCHASE_ALL_CHECKED";
const PURCHASE_ALL_UNCHECKED = "idea/PURCHASE_ALL_UNCHECKED";

const PURCHASE_INCONVENIENT_CHECKED = "idea/PURCHASE_INCONVENIENT_CHECKED";
const PURCHASE_INCONVENIENT_UNCHECKED = "idea/PURCHASE_INCONVENIENT_UNCHECKED";

export const tempIdea = (payload) => (dispatch) => {
  switch (payload.type) {
    case "ideaName": {
      dispatch({ type: TEMP_IDEA_NAME, payload });
      return;
    }
    case "shortDescription": {
      dispatch({ type: TEMP_SHORT_DESCRIPTION, payload });
      return;
    }
    case "motivation": {
      dispatch({ type: TEMP_INCONVENIENT, payload });
      return;
    }
    case "need": {
      dispatch({ type: TEMP_PURPOSE, payload });
      return;
    }
    case "strategy": {
      dispatch({ type: TEMP_COMPETITIVE_EDGE, payload });
      return;
    }
    case "competitiveness": {
      dispatch({ type: TEMP_DIFFERENTIATION, payload });
      return;
    }
    case "market_analysis": {
      dispatch({ type: TEMP_MARKET_ANALYSIS, payload });
      return;
    }
    default:
      return;
  }
};

export const createIdea = (temp) => async (dispatch) => {
  dispatch({ type: CREATE_IDEA });
  console.log(temp);
  try {
    const result = await axios.post(
      "/idea/post",
      {
        banker_id: temp.banker,
        project_name: temp.ideaName,
        short_description: temp.shortDescription,
        category: "생활",
        goodsList: [
          {
            goods_type: "motivation",
            open_status: temp.inconvenient.open_status,
            content: temp.inconvenient.content,
            price: temp.inconvenient.price,
          },
          {
            goods_type: "need",
            open_status: temp.purpose.open_status,
            content: temp.purpose.content,
            price: temp.purpose.price,
          },
          {
            goods_type: "strategy",
            open_status: temp.competitiveEdge.open_status,
            content: temp.competitiveEdge.content,
            price: temp.competitiveEdge.price,
          },
          {
            goods_type: "market_analysis",
            open_status: temp.marketAnalysis.open_status,
            content: temp.marketAnalysis.content,
            price: temp.marketAnalysis.price,
          },
          {
            goods_type: "competitiveness",
            open_status: temp.differentiation.open_status,
            content: temp.differentiation.content,
            price: temp.differentiation.price,
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

export const purchaseAllChecked = () => (dispatch) => ({
  type: PURCHASE_ALL_CHECKED,
});

export const purchaseAllUnchecked = () => ({
  type: PURCHASE_ALL_UNCHECKED,
});

export const purchaseInconvenientChecked = () => ({
  type: PURCHASE_INCONVENIENT_CHECKED,
});

export const purchaseInconvenientUnchecked = () => ({
  type: PURCHASE_INCONVENIENT_UNCHECKED,
});

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
  purchaseInfo: {
    IdeaId: null,
    banker: localStorage.user,
    totalPriceOfPurchaser: 0,
    inconvenient: {
      blur: false,
      price: 0,
    },
    purpose: {
      blur: false,
      price: 0,
    },
    competitiveEdge: {
      blur: false,
      price: 0,
    },
    differentiation: {
      blur: false,
      price: 0,
    },
    marketAnalysis: {
      blur: false,
      price: 0,
    },
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
            open_status: action.payload.blur,
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
            open_status: action.payload.blur,
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
            open_status: action.payload.blur,
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
            open_status: action.payload.blur,
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
            open_status: action.payload.blur,
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
    case PURCHASE_ALL_CHECKED:
      return {
        ...state,
        purchaseInfo: {},
      };
    case PURCHASE_ALL_UNCHECKED:
      return { ...state };
    default:
      return state;
  }
}
