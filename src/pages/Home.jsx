import React, { useEffect, useState } from "react";

import IdCardContainer from "../containers/IdCardContainer";
import ContentsTitle from "../components/ContentsTitle";
import { useDispatch, useSelector } from "react-redux";
import { getIdeas } from "../modules/ideaCards";

import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIdeas());
  }, [dispatch]);
  const { ideaCards } = useSelector((state) => ({
    ideaCards: state.ideaCards.ideas,
  }));
  return (
    <>
      <article>
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdCardContainer ideaCards={ideaCards} />
      </article>
    </>
  );
};

export default Home;
