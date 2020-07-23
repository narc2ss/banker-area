import axios from "axios";

const REQUEST_PURCHASE_LIST = "purchase/REQUEST_PURCHASE_LIST";
const REQUEST_PURCHASE_LIST_SUCCESS = "purchase/REQUEST_PURCHASE_LIST_SUCCESS";
const REQUEST_PURCHASE_LIST_ERROR = "purchase/REQUEST_PURCHASE_LIST_ERROR";

export const requestPurchaseList = (purchaseList) => async (dispatch) => {
  dispatch({ type: REQUEST_PURCHASE_LIST });
  try {
    const result = await axios.post(`/kakaoPaySuccess`, purchaseList, {
      withCredentials: true,
    });
    dispatch({ type: REQUEST_PURCHASE_LIST_SUCCESS, payload: result });
  } catch (error) {
    console.error(error);
    dispatch({ type: REQUEST_PURCHASE_LIST_ERROR, payload: error });
  }
};

const initialState = {
  loading: false,
  result: null,
  error: null,
};

export default function purchase(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PURCHASE_LIST:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case REQUEST_PURCHASE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload.result,
        error: null,
      };
    case REQUEST_PURCHASE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        result: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
