import React from "react";
import styled from "styled-components";

import ViewToggleButton from "../components/ViewToggleButton";
import { Button, Input, TextArea } from "../style/atoms";
import TitleListContainer from "../containers/TitleListContainer";

const WritePositioner = styled.article`
  display: flex;
`;

const FormContainer = styled.form`
  width: 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & span {
    padding: 0 1rem;
  }
`;

const Write = () => {
  return (
    <>
      <WritePositioner>
        <TitleListContainer />
        <FormContainer>
          <div>
            <TitleContainer>
              <ViewToggleButton disable />
              <h3>아이디어 이름</h3>
            </TitleContainer>
            <Input placeholder="아이디어의 이름을 정해주세요!" required />
            <Button value="확인" />
          </div>
          <div>
            <TitleContainer>
              <ViewToggleButton disable />
              <h3>간단요약</h3>
            </TitleContainer>
            <TextArea
              placeholder="구매욕구를 끌어올릴만한 짧은 요약을 적어주세요!"
              required
            />
            <Button type="button" value="확인" />
          </div>
          <hr />
          <div>
            <TitleContainer>
              <ViewToggleButton />
              <h3>아이디어의 부재로 인한 불편한 점</h3>
            </TitleContainer>
            <TextArea
              placeholder="아이디어의 부재로 인하여 생기는 불편한 점은 무엇인가요?"
              required
            />
            <Input placeholder="가격을 입력해주세요" />
            <Button type="button" value="확인" />
          </div>
          <div>
            <TitleContainer>
              <ViewToggleButton />
              <h3>아이디어가 구현하고자 하는 목적</h3>
            </TitleContainer>
            <TextArea
              placeholder="아이디어가 구현하고자 하는 목적은 무엇인가요?"
              required
            />
            <Input placeholder="가격을 입력해주세요" />
            <Button type="button" value="확인" />
          </div>
          <div>
            <TitleContainer>
              <ViewToggleButton />
              <h3>경쟁사 대비 우위요소</h3>
            </TitleContainer>
            <TextArea
              placeholder="아이디어가 가지고 있는 경쟁사 대비 우위요소는 무엇인가요?"
              required
            />
            <Input placeholder="가격을 입력해주세요" />
            <Button type="button" value="확인" />
          </div>
          <div>
            <TitleContainer>
              <ViewToggleButton />
              <h3>차별화 전략</h3>
            </TitleContainer>
            <TextArea
              placeholder="아이디어를 실현 시키기 위해 가지고 있는 차별화 전략을 적어주세요."
              required
            />
            <Input placeholder="가격을 입력해주세요" />
            <Button value="확인" />
          </div>
          <div>
            <TitleContainer>
              <ViewToggleButton />
              <h3>시장분석</h3>
            </TitleContainer>
            <TextArea placeholder="시장분석" required />
            <Input placeholder="가격을 입력해주세요" />
            <Button type="button" value="확인" />
          </div>
          <Button value="작성취소" primary />
          <Button type="submit" value="미리보기" />
        </FormContainer>
      </WritePositioner>
    </>
  );
};

export default Write;
