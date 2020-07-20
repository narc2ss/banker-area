import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "../../style/atoms";
import {
  IdeaTextAreaWrapper,
  ToggleButtonAndTitleWrapper,
} from "../../style/molecules";
import { SpaceBetween, RightAligned } from "../../style/positions";
import { useInput } from "../../util";
import { useDispatch } from "react-redux";
import { tempIdea } from "../../modules/idea";

const IdeaTextArea = ({ title, disable, children, data, type }) => {
  const dispatch = useDispatch();
  const [view, setView] = useState(true);
  const [price, setPrice] = useState(0);
  const toggleHandler = () => {
    setView(!view);
    setPrice(0);
  };
  const priceHandler = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };

  const showInfoHandler = (e) => {
    e.preventDefault();
    dispatch(
      tempIdea({
        type,
        data,
        view: false,
        price: 0,
      })
    );
  };

  const unShowInfoHandler = (e) => {
    e.preventDefault();
    dispatch(
      tempIdea({
        type,
        data,
        view,
        price: parseInt(price, 10),
      })
    );
  };

  if (disable) {
    return (
      <IdeaTextAreaWrapper onSubmit={showInfoHandler}>
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
    <IdeaTextAreaWrapper onSubmit={unShowInfoHandler}>
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
          <Input placeholder="가격입력" value={price} onChange={priceHandler} />
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
