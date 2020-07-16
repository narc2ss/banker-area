import React from "react";
import IdCardContainer from "../containers/IdCardContainer";
import { useSelector } from "react-redux";

const Search = ({ match }) => {
  const { keyword } = match.params;
  const { ideaCards } = useSelector((state) => ({
    ideaCards: state.search.ideaCardsOfKeyword,
  }));
  return (
    <>
      <h1>카워드 : {keyword}</h1>
      <IdCardContainer ideaCards={ideaCards} />
    </>
  );
};

export default Search;
