import React, { useEffect, useState } from "react";

import IdeaCardContainer from "../containers/IdeaCardContainer";
import ContentsTitle from "../components/ContentsTitle";
import { useDispatch, useSelector } from "react-redux";
import { getIdeas } from "../modules/ideaCards";
import { SearchBar } from "../style/molecules";
import { useInput } from "../util/useInput";
import { getSearchIdeas } from "../modules/search";
import styled from "styled-components";

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
        <SearchBarWrapper onSubmit={onSubmit}>
          <SearchBar value={keyword.value} onChange={keyword.onChange} />
        </SearchBarWrapper>
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdeaCardContainer ideaCards={ideaCards} />
      </article>
    </>
  );
};

const SearchBarWrapper = styled.form`
  text-align: center;
  margin-bottom: 2rem;
`;

export default Home;
