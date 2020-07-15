import React from "react";

import IdCardContainer from "../containers/IdCardContainer";
import ContentsTitle from "../components/ContentsTitle";
import TodosContainer from "../containers/TodosContainer";

const Home = () => {
  return (
    <>
      <article>
        <TodosContainer />
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdCardContainer />
      </article>
    </>
  );
};

export default Home;
