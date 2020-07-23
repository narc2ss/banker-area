import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RouteLink, Button } from "../style/atoms";
import { RightAligned } from "../style/positions";
import { createIdea } from "../modules/idea";
import logo from "../static/img/logo.png";
import { Content } from "../pages/IdeaDetailPage";

const PreviewIdea = () => {
  const temp = useSelector((state) => state.idea.temp);
  const {
    banker,
    ideaName,
    shortDescription,
    inconvenient,
    purpose,
    competitiveEdge,
    differentiation,
    marketAnalysis,
    totalPriceOfIdea,
  } = temp;
  const dispatch = useDispatch();
  const createIdeaHandler = () => {
    console.log(temp);
    dispatch(createIdea(temp));
  };
  const today = new Date();

  return (
    <>
      <PreviewWrapper>
        <ButtonPositioner>
          <ButtonWrapper>
            <LikePositioner>
              <LikeWrapper>
                <FontAwesomeIcon icon={faHeart} />
              </LikeWrapper>
              <span>0</span>
            </LikePositioner>
            <CartWrapper>
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartWrapper>
          </ButtonWrapper>
        </ButtonPositioner>
        <ContentPositioner>
          <InfoPositioner>
            <img src={logo} alt={`${banker}의프로필사진`} />
            <h1>{banker}</h1>
            <h5>{`${today.toLocaleDateString()}`}</h5>
            <h6>조회수 0회</h6>
          </InfoPositioner>

          <ContentWrapper>
            <h2>{ideaName}</h2>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어 간단요약</h1>
            <p>{shortDescription}</p>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어 총 가격</h1>
            <p>{totalPriceOfIdea}원</p>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어의 부재로 인하여 불편한점</h1>
            <Content blur={inconvenient.open_status}>
              {inconvenient.content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어가 구현하고자 하는 목적</h1>
            <Content blur={purpose.open_status}>{purpose.content}</Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>경쟁사 대비 우위요소</h1>
            <Content blur={competitiveEdge.open_status}>
              {competitiveEdge.content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>차별화 전략</h1>
            <Content blur={differentiation.open_status}>
              {differentiation.content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>시장분석</h1>
            <Content blur={marketAnalysis.open_status}>
              {marketAnalysis.content}
            </Content>
          </ContentWrapper>
          <RightAligned>
            <RouteLink to="/write">수정하기</RouteLink>
            <Button onClick={createIdeaHandler}>등록하기</Button>
          </RightAligned>
        </ContentPositioner>
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
`;

const ButtonPositioner = styled.div`
  flex: 1;
  color: ${(props) => props.theme.palette.gray};
`;

const ButtonWrapper = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LikePositioner = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-size: 0.8rem;
  }
`;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 2px solid ${(props) => props.theme.palette.gray};
`;

const CartWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.palette.gray};
`;

const ContentPositioner = styled.section`
  flex: 10;
  padding: 3rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoPositioner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  & h1 {
    font-size: 2rem;
    margin-right: 1rem;
  }

  & h5 {
    font-size: 1.3rem;
    margin-right: 1rem;
  }

  & h6 {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;
`;

export default PreviewIdea;
