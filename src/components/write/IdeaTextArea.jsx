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
import ideaPriceValidator from "../../util/ideaPriceValidator";

const IdeaTextArea = ({ title, disable, children, data, type }) => {
  const dispatch = useDispatch();
  const [blur, setBlur] = useState(true);
  const [price, setPrice] = useState(0);
  const toggleHandler = () => {
    setBlur(!blur);
    console.log(blur);
  };
  const priceHandler = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };

  const infoHandler = (e) => {
    e.preventDefault();
    if (!blur && typeof price === "string") setPrice(0);
    dispatch(
      tempIdea({
        type,
        data,
        blur,
        price: ideaPriceValidator(price),
      })
    );
    console.log({ type, data, blur, price });
  };

  if (disable) {
    return (
      <IdeaTextAreaWrapper onSubmit={infoHandler}>
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
    <IdeaTextAreaWrapper onSubmit={infoHandler}>
      <ToggleButtonAndTitleWrapper>
        <span onClick={toggleHandler}>
          {blur ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
        <h1>{title}</h1>
      </ToggleButtonAndTitleWrapper>
      {children}
      {blur ? (
        <SpaceBetween>
          <Input
            type="number"
            placeholder="가격입력"
            value={price}
            onChange={priceHandler}
          />
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
