import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import logo from "../static/img/logo.png";

const dummyData = {
  liker: 943,
  src: logo,
  banker: "narciss",
  writeDate: "2020년 7월 23일",
  view: 23221,
  shortDescription: "TV리모컨 그만찾기",
  price: 300000,
  inconvenient:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  purpose:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  competitiveEdge:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  differentiation:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  marketAnalysis:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
};

const DetailContainer = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
`;

const Article = styled.p`
  filter: ${(props) => (props.bulr ? "blur(10px);" : "blur(0px);")};
`;

const IdeaDetail = ({ match }) => {
  const { id } = match.params;
  const {
    liker,
    banker,
    writeDate,
    view,
    shortDescription,
    price,
    inconvenient,
    purpose,
    competitiveEdge,
    differentiation,
    marketAnalysis,
  } = dummyData;

  return (
    <>
      <h1>IDEA {id}</h1>
      <div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <span>{liker}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
      <div>
        <ProfileImage src={logo} alt="profileImage" />
        <h2>{banker}</h2>
        <span>{writeDate}</span>
        <span>{view}회</span>
      </div>
      <DetailContainer>
        <h2>아이디어 이름</h2>
        <Article>{shortDescription}</Article>
        <h2>아이디어 가격</h2>
        <h3>{price}</h3>
        <br />
        <h2>문제인식</h2>
        <h3>아이디어의 부재로 불편한 점</h3>
        <Article bulr>{inconvenient}</Article>
        <h3>아이디어가 구현하고자 하는 목적</h3>
        <Article bulr>{purpose}</Article>
        <h2>실현 가능성</h2>
        <h3>경쟁사 대비 우위요소</h3>
        <Article bulr>{competitiveEdge}</Article>
        <h3>차별화 전략</h3>
        <Article bulr>{differentiation}</Article>
        <h2>시장분석</h2>
        <Article bulr>{marketAnalysis}</Article>
      </DetailContainer>
    </>
  );
};

export default IdeaDetail;
