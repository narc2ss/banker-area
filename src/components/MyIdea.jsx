import React, { useEffect } from "react";
import IdeaCardContainer from "../containers/IdeaCardContainer";
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
  return <IdeaCardContainer edit ideaCards={myIdeaCards} />;
};

export default MyIdea;
