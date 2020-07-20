import React from "react";
import IdeaCardContainer from "../containers/IdeaCardContainer";
import { useSelector } from "react-redux";

const Search = ({ match }) => {
  const { keyword } = match.params;
  const { ideaCards } = useSelector((state) => ({
    ideaCards: state.search.ideaCardsOfKeyword,
  }));
  return (
    <>
      <h1>키워드 : {keyword}</h1>
      <IdeaCardContainer ideaCards={ideaCards} />
    </>
  );
};

export default Search;
