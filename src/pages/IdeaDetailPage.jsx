import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { getIdea, likeIdea } from "../modules/idea";
import logo from "../static/img/logo.png";

const IdeaDetail = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.idea.idea);
  useEffect(() => {
    dispatch(getIdea(id));
  }, [dispatch]);

  const likeHandler = () => {
    dispatch(likeIdea(id));
  };

  if (loading) return <h1>로딩중!</h1>;
  if (error) return <h1>에러 발생!</h1>;
  if (!data) return <h1>데이터 없음!</h1>;
  return (
    <>
      <PreviewWrapper>
        <ButtonPositioner>
          <ButtonWrapper>
            <LikePositioner>
              <LikeWrapper liked={data.liked} onClick={likeHandler}>
                <FontAwesomeIcon icon={faHeart} />
              </LikeWrapper>
              <span>{data.likey_count}</span>
            </LikePositioner>
            <CartWrapper>
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartWrapper>
          </ButtonWrapper>
        </ButtonPositioner>
        <ContentPositioner>
          <InfoPositioner>
            <img src={logo} alt={`${data.banker_id}의프로필사진`} />
            <h1>{data.banker_id}</h1>
            <h5>{data.req_date}</h5>
            <h6>조회수 {data.read_count}회</h6>
          </InfoPositioner>

          <ContentWrapper>
            <h2>{data.project_name}</h2>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어 간단요약</h1>
            <p>{data.short_description}</p>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어 총 가격</h1>
            <p>{data.totalPriceOfIdea}</p>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어의 부재로 인하여 불편한점</h1>
            <Content blur={data.goodsList[0].open_status}>
              {data.goodsList[0].content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>아이디어가 구현하고자 하는 목적</h1>
            <Content blur={data.goodsList[1].open_status}>
              {data.goodsList[1].content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>경쟁사 대비 우위요소</h1>
            <Content blur={data.goodsList[2].open_status}>
              {data.goodsList[2].content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>차별화 전략</h1>
            <Content blur={data.goodsList[3].open_status}>
              {data.goodsList[3].content}
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <h1>시장분석</h1>
            <Content blur={data.goodsList[4].open_status}>
              {data.goodsList[4].content}
            </Content>
          </ContentWrapper>
        </ContentPositioner>
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
`;

const ContentPositioner = styled.section`
  flex: 10;
  padding: 3rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
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
  cursor: pointer;

  ${(props) =>
    props.isLiked &&
    css`
      color: ${(props) => props.theme.palette.wildWatermelon};
      border: 2px solid ${(props) => props.theme.palette.wildWatermelon};
    `}

  &:hover {
    color: ${(props) => props.theme.palette.wildWatermelon};
    border: 2px solid ${(props) => props.theme.palette.wildWatermelon};
    transition: 0.3s ease-in-out;
  }
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

const Content = styled.p`
  margin: 1rem 0;

  ${(props) =>
    props.blur &&
    css`
      filter: blur(4px);
    `}
`;

export default IdeaDetail;
