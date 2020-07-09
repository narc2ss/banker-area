import React from "react";
import IdeaCard from "../components/IdeaCard";
import { Link } from "react-router-dom";

import logo from "../static/img/logo.png";

const dummyData = [
  {
    id: 1,
    banker: "narciss",
    src: logo,
    article: "TV리모컨 그만찾기",
    price: 300000,
    view: 23221,
    liker: 943,
  },
  {
    id: 2,
    banker: "dangmil",
    src: logo,
    article: "TV리모컨 그만찾기",
    price: 23400,
    view: 321,
    liker: 12,
  },
];

const Home = () => {
  return (
    <>
      <article>
        <section>
          <h1>인기 아이디어!</h1>
          {dummyData.map((v) => {
            return (
              <Link to={`/idea/${v.id}`}>
                <IdeaCard />
              </Link>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default Home;
