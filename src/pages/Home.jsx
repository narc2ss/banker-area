import React from "react";

import IdCardContainer from "../containers/IdCardContainer";
import ContentsTitle from "../components/ContentsTitle";
import TodosContainer from "../containers/TodosContainer";
import CounterContainer from "../containers/CounterContainer";

const Home = () => {
  return (
    <>
      <article>
        <TodosContainer />
        <CounterContainer />
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdCardContainer />
      </article>
    </>
  );
};

export default Home;
