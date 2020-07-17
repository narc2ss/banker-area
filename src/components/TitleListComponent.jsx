import React from "react";
import styled from "styled-components";

const TitleListWrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
  margin-right: 2rem;
  height: 50%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 100px;
  h5 {
    margin-bottom: 1rem;
  }
`;

const TitleListComponent = () => {
  return (
    <>
      <TitleListWrapper>
        <h5>아이디어 이름</h5>
        <h5>간단요약</h5>
        <h5>아이디어의 부재로 인한 불편한 점</h5>
        <h5>아이디어가 구현하고자 하는 목적</h5>
        <h5>경쟁사 대비 우위요소</h5>
        <h5>차별화 전략</h5>
        <h5>시장분석</h5>
      </TitleListWrapper>
    </>
  );
};

export default TitleListComponent;
