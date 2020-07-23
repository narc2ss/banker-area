import React, { useEffect } from "react";
import IdeaCardContainer from "../containers/IdeaCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { myIdeas } from "../modules/ideaCards";

const dummy = [
  {
    banker: "narciss",
    article:
      "여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은 유료설정이 가능합니다.",
    price: 540000,
    view: 321,
    liker: 43,
  },
];

const MyIdea = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myIdeas());
  }, []);
  const { myIdeaCards } = useSelector((state) => ({
    myIdeaCards: state.ideaCards.myIdeas,
  }));
  if (!myIdeaCards) return <h1>나의 아이디어 데이터 없음</h1>;

  // dummy data
  return <IdeaCardContainer edit ideaCards={dummy} />;

  // return <IdeaCardContainer edit ideaCards={myIdeaCards} />;
};

export default MyIdea;
