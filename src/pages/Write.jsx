import React from "react";
import styled from "styled-components";

import TitleListContainer from "../containers/TitleListContainer";
import IdeaTextAreaContainer from "../containers/write/IdeaTextAreaContainer";

const WritePositioner = styled.article`
  display: flex;
`;

const FormContainer = styled.form`
  flex: 10;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Write = () => {
  return (
    <>
      <WritePositioner>
        <TitleListContainer />
        <FormContainer>
          <IdeaTextAreaContainer />
        </FormContainer>
      </WritePositioner>
    </>
  );
};

export default Write;
