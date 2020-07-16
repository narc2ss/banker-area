import React, { useEffect } from "react";
import IdCardContainer from "../containers/IdCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { myIdeas } from "../modules/ideaCards";

const MyIdea = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myIdeas());
  }, []);
  const { myIdeaCards } = useSelector((state) => ({
    myIdeaCards: state.ideaCards.myIdeas,
  }));
  return <IdCardContainer edit ideaCards={myIdeaCards} />;
};

export default MyIdea;
