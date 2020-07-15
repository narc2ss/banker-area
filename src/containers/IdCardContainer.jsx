import React from "react";

import IdeaCard from "../components/IdeaCard";
import { IdeaCardPositioner } from "../style/molecules";
import logo from "../static/img/logo.png";

const dummyData = [
  {
    id: 1,
    banker: "narciss",
    src: logo,
    title: "TV리모컨 그만찾기",
    article: "TV리모컨이 사라진 경험이 있지 홀홀홀..",
    price: 300000,
    view: 23221,
    liker: 943,
  },
  {
    id: 2,
    banker: "dangmil",
    src: logo,
    title: "TV리모컨 그만찾기",
    article: "TV리모컨이 사라진 경험이 있지 홀홀홀..",
    price: 23400,
    view: 321,
    liker: 12,
  },

  {
    id: 3,
    banker: "egoing",
    src: logo,
    title: "TV리모컨 그만찾기",
    article: "TV리모컨이 사라진 경험이 있지 홀홀홀..",
    price: 3000,
    view: 31,
    liker: 1,
  },
  {
    id: 4,
    banker: "homeless",
    src: logo,
    title: "TV리모컨 그만찾기",
    article: "TV리모컨이 사라진 경험이 있지 홀홀홀..",
    price: 3000,
    view: 31,
    liker: 1,
  },
  {
    id: 5,
    banker: "뱅커3",
    src: logo,
    title: "아이디어 5",
    article: "아이디어5의 짧은 본문",
    price: 5000000,
    view: 321,
    liker: 11,
  },
  {
    id: 6,
    banker: "narciss",
    src: logo,
    title: "TV리모컨 그만찾기",
    article: "TV리모컨이 사라진 경험이 있지 홀홀홀..",
    price: 3000,
    view: 98,
    liker: 34,
  },
];

const IdCardContainer = ({ edit }) => {
  return (
    <>
      <IdeaCardPositioner>
        {dummyData.map((value) => (
          <IdeaCard
            id={value.id}
            banker={value.banker}
            title={value.title}
            article={value.article}
            price={value.price}
            view={value.view}
            liker={value.liker}
            edit={edit}
          />
        ))}
      </IdeaCardPositioner>
    </>
  );
};

export default IdCardContainer;
