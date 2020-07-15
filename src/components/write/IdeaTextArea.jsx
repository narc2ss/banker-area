import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "../../style/atoms";
import {
  IdeaTextAreaWrapper,
  ToggleButtonAndTitleWrapper,
} from "../../style/molecules";
import { SpaceBetween, RightAligned } from "../../style/positions";

const IdeaTextArea = ({ title, disable, children }) => {
  const [view, setView] = useState(false);

  const toggleHandler = () => {
    setView(!view);
  };

  if (disable) {
    return (
      <IdeaTextAreaWrapper>
        <ToggleButtonAndTitleWrapper>
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>
          <h1>{title}</h1>
        </ToggleButtonAndTitleWrapper>
        {children}
        <RightAligned>
          <Button secondary>확인</Button>
        </RightAligned>
      </IdeaTextAreaWrapper>
    );
  }
  return (
    <IdeaTextAreaWrapper>
      <ToggleButtonAndTitleWrapper>
        <span onClick={toggleHandler}>
          {view ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </span>
        <h1>{title}</h1>
      </ToggleButtonAndTitleWrapper>
      {children}
      {!view ? (
        <SpaceBetween>
          <Input placeholder="가격입력" />
          <Button secondary>확인</Button>
        </SpaceBetween>
      ) : (
        <RightAligned>
          <Button secondary>확인</Button>
        </RightAligned>
      )}
    </IdeaTextAreaWrapper>
  );
};

export default IdeaTextArea;
