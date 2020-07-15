import React from "react";
import styled from "styled-components";

import TitleListContainer from "../containers/TitleListContainer";
import IdeaTextAreaContainer from "../containers/write/IdeaTextAreaContainer";

const WritePositioner = styled.article`
  display: flex;
`;

const FormContainer = styled.form`
  width: 50%;
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
