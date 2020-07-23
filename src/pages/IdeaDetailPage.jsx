import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  getIdea,
  likeIdea,
  purchaseAllChecked,
  purchaseInconvenientChecked,
  purchaseAllUnchecked,
} from "../modules/idea";
import logo from "../static/img/logo.png";
import { SpaceBetween } from "../style/positions";
import { Button } from "../style/atoms";

const DropDownMenu = styled.form`
  color: ${(props) => props.theme.palette.black};
  padding: 1rem 1rem 0 1rem;
  position: absolute;
  width: 500px;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  & ul {
    margin-bottom: 1rem;
  }
  & ul > * {
    margin-bottom: 0.5rem;
  }
`;

const IdeaDetail = ({ match }) => {
  const { id } = match.params;
  const [purchase, setPurchase] = useState(false);
  let [totalPriceOfPurchase, setTotalPriceOfPurchase] = useState(0);

  const [purchaseList, setPurchaseList] = useState([]);
  const [allPurcahse, setAllPurcahse] = useState(false);
  const [inconvenientPurcahse, setInconvenientPurcahse] = useState(false);
  const [purposePurchase, setPurposePurChase] = useState(false);
  const [competitiveEdgePurchase, setCompetitiveEdgePurChase] = useState(false);
  const [differentiationPurChase, setDifferentiationPurChase] = useState(false);
  const [marketAnalysisPurChase, setMarketAnalysisPurChase] = useState(false);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.idea.idea);
  useEffect(() => {
    dispatch(getIdea(id));
  }, [dispatch]);

  const likeHandler = () => {
    // dispatch(likeIdea(id));
  };

  const onTogglePurchaseBox = (e) => {
    setPurchase(!purchase);
  };

  const onAllPurchase = () => {
    setAllPurcahse(!allPurcahse);
    setInconvenientPurcahse(false);
    setPurposePurChase(false);
    setCompetitiveEdgePurChase(false);
    setDifferentiationPurChase(false);
    setMarketAnalysisPurChase(false);
    if (!allPurcahse) dispatch(purchaseAllChecked());
    else dispatch(purchaseAllUnchecked());
    data.goodsList.filter((v) => {
      if (v.open_status) purchaseList.push(v.goods_seq);
    });
  };

  const onPurposePurChase = () => {
    setAllPurcahse(false);
    setPurposePurChase(!purposePurchase);
  };

  const onCompetitiveEdgePurChase = () => {
    setCompetitiveEdgePurChase(!competitiveEdgePurchase);
    setAllPurcahse(false);
  };

  const onDifferentiationPurChase = () => {
    setDifferentiationPurChase(!differentiationPurChase);
    setAllPurcahse(false);
  };

  const onMarketAnalysisPurChase = () => {
    setMarketAnalysisPurChase(!marketAnalysisPurChase);
    setAllPurcahse(false);
  };

  const onPurchaseIdea = (e) => {
    console.log(purchaseList);
    localStorage.setItem("purchaseList", purchaseList);
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
            <CartWrapper onClick={onTogglePurchaseBox}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartWrapper>
          </ButtonWrapper>
          {purchase && (
            <DropDownMenu
              onSubmit={onPurchaseIdea}
              name="form"
              action="http://192.168.1.230:8080/purchase"
              method="post"
            >
              <input type="hidden" name="purchaseList" value={purchaseList} />
              <ul>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        checked={allPurcahse}
                        onClick={onAllPurchase}
                      />
                      전체구매
                    </label>
                    <h3>{data.totalPriceOfIdea}원</h3>
                  </SpaceBetween>
                </li>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        // checked={inconvenientPurcahse}
                        disabled
                      />
                      아이디어의 부재로 인하여 불편한 점 구매
                    </label>
                    <h3>{data.goodsList[0].price}원</h3>
                  </SpaceBetween>
                </li>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        // checked={purposePurchase}
                        disabled
                        onClick={onPurposePurChase}
                      />
                      아이디어가 구현하고자 하는 목적 구매
                    </label>
                    <h3>{data.goodsList[1].price}원</h3>
                  </SpaceBetween>
                </li>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        // checked={competitiveEdgePurchase}
                        disabled
                        onClick={onCompetitiveEdgePurChase}
                      />
                      경쟁사대비 우위요소 구매
                    </label>
                    <h3>{data.goodsList[2].price}원</h3>
                  </SpaceBetween>
                </li>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        // checked={differentiationPurChase}
                        disabled
                        onClick={onDifferentiationPurChase}
                      />
                      차별화 전략 구매
                    </label>
                    <h3>{data.goodsList[3].price}원</h3>
                  </SpaceBetween>
                </li>
                <li>
                  <SpaceBetween>
                    <label>
                      <input
                        type="checkbox"
                        // checked={marketAnalysisPurChase}
                        disabled
                        onClick={onMarketAnalysisPurChase}
                      />
                      시장분석 구매
                    </label>
                    <h3>{data.goodsList[4].price}원</h3>
                  </SpaceBetween>
                </li>
              </ul>
              <SpaceBetween>
                <h3>구매 목록 합계</h3>
                <h3>{totalPriceOfPurchase}원</h3>
              </SpaceBetween>
              <Button type="submit" full>
                구매
              </Button>
            </DropDownMenu>
          )}
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

export const Content = styled.p`
  margin: 1rem 0;

  ${(props) =>
    props.blur &&
    css`
      filter: blur(4px);
    `}
`;

export default IdeaDetail;
