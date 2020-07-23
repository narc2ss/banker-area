import axios from "axios";

const MY_PURCHASE_LIST = "my/MY_PURCHASE_LIST";
const MY_PURCHASE_LIST_SUCCESS = "my/MY_PURCHASE_LIST_SUCCESS";
const MY_PURCHASE_LIST_ERROR = "my/MY_PURCHASE_LIST_ERROR";

export const getPurchaseList = () => async (dispatch) => {
  dispatch({ type: MY_PURCHASE_LIST });
  try {
    const payload = await axios.get("/idea/list/purchase", {
      withCredentials: true,
    });
    dispatch({ type: MY_PURCHASE_LIST_SUCCESS, payload });
  } catch (error) {
    console.error(error);
    dispatch({ type: MY_PURCHASE_LIST_ERROR, payload: error });
  }
};

const initialState = {
  purchaseList: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function my(state = initialState, action) {
  switch (action.type) {
    case MY_PURCHASE_LIST:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case MY_PURCHASE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case MY_PURCHASE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
