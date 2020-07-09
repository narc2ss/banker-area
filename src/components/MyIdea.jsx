import React from "react";
import { Link } from "react-router-dom";

import logo from "../static/img/logo.png";
import IdeaCard from "./IdeaCard";

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

const MyIdea = () => {
  return (
    <>
      {dummyData.map((v) => {
        return (
          <Link to={`/idea/${v.id}`}>
            <IdeaCard props={v} />
          </Link>
        );
      })}
    </>
  );
};

export default MyIdea;
