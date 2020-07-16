import axios from "axios";

const CREATE_IDEA = "idea/CREATE_IDEA";
const CREATE_IDEA_SUCCESS = "idea/CREATE_IDEA_SUCCESS";
const CREATE_IDEA_ERROR = "idea/CREATE_IDEA_ERROR";

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
};

export default function idea(state = initialState, action) {
  return state;
}
