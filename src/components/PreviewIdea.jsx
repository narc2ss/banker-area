import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { RouteLink, Button } from "../style/atoms";
import { SpaceBetween, RightAligned } from "../style/positions";

const PreviewIdea = ({ idea }) => {
  const {
    banker,
    writeData,
    ideaName,
    shortDescription,
    totalPriceOfIdea,
    inconvenient,
    purpose,
    competitiveEdge,
    differentiation,
    marketAnalysis,
    like,
    view,
  } = idea;
  return (
    <>
      <section>
        <div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <span>{like}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
        <div>
          <h1>{banker}</h1>
          <h5>{writeData}</h5>
          <h5>{view}</h5>
        </div>
        <article>
          <h1>아이디어 이름</h1>
          <h2>{ideaName}</h2>
        </article>
        <article>
          <h1>아이디어 간단요약</h1>
          <h2>{shortDescription}</h2>
        </article>
        <article>
          <h1>아이디어 총 가격</h1>
          <h2>{totalPriceOfIdea}</h2>
        </article>
      </section>
      <section>
        <article>
          <h1>아이디어의 부재로 인하여 불편한점</h1>
          <h2>{inconvenient.content}</h2>
        </article>
        <article>
          <h1>아이디어가 구현하고자 하는 목적</h1>
          <h2>{purpose.content}</h2>
        </article>
        <article>
          <h1>경쟁사 대비 우위요소</h1>
          <h2>{competitiveEdge.content}</h2>
        </article>
        <article>
          <h1>차별화 전략</h1>
          <h2>{differentiation.content}</h2>
        </article>
        <article>
          <h1>시장분석</h1>
          <h2>{marketAnalysis.content}</h2>
        </article>
      </section>
      <section>
        <RightAligned>
          <RouteLink to="/write">수정하기</RouteLink>
          <Button>등록하기</Button>
        </RightAligned>
      </section>
    </>
  );
};
export default PreviewIdea;
