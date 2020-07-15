import React from "react";

import IdCardContainer from "../containers/IdCardContainer";
import ContentsTitle from "../components/ContentsTitle";

const Home = () => {
  return (
    <>
      <article>
        <ContentsTitle>인기 아이디어!</ContentsTitle>
        <IdCardContainer />
      </article>
    </>
  );
};

export default Home;
