import React, { useEffect, useState } from "react";

import IdCardContainer from "../containers/IdCardContainer";
import ContentsTitle from "../components/ContentsTitle";
import { useDispatch, useSelector } from "react-redux";
import { getIdeas } from "../modules/ideaCards";
import { SearchBar } from "../style/molecules";
import { useInput } from "../util/useInput";
import { getSearchIdeas } from "../modules/search";

const Home = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(history);
    dispatch(getIdeas());
  }, [dispatch]);
  const { ideaCards } = useSelector((state) => ({
    ideaCards: state.ideaCards.ideas,
  }));
  const keyword = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchIdeas(keyword.value, history));
  };
  return (
    <>
      <article>
        <form onSubmit={onSubmit}>
          <SearchBar value={keyword.value} onChange={keyword.onChange} />
        </form>
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdCardContainer ideaCards={ideaCards} />
      </article>
    </>
  );
};

export default Home;
