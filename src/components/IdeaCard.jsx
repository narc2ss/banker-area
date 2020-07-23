import React, { useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../static/img/logo.png";
import { Button, RouteLink } from "../style/atoms";
import {
  IdeaCardWrapper,
  IdeaCardUserProfile,
  ViewLikeWrapper,
} from "../style/molecules";
import { SpaceBetween, RightAligned } from "../style/positions";
import styled from "styled-components";
import warnning from "../static/img/warnning.png";

const IdeaCard = ({
  key,
  edit,
  danger,
  id,
  banker,
  title,
  article,
  price,
  view,
  liker,
}) => {
  const [isDelete, setIsDelete] = useState(true);
  const onWarnningToggle = () => {
    setIsDelete(!isDelete);
  };
  if (edit) {
    return (
      <IdeaCardWrapper>
        {isDelete ? (
          <WarnningWrapper>
            <img src={warnning} alt="경고" />
            <h5>복구할 수 없습니다. 정말 삭제 하시겠습니까?</h5>
            <RightAligned>
              <Button onClick={onWarnningToggle}>취소</Button>
              <Button tertiary>삭제</Button>
            </RightAligned>
          </WarnningWrapper>
        ) : (
          <>
            <div>
              <SpaceBetween>
                <IdeaCardUserProfile>
                  <img src={logo} alt="뱅크에리어" />
                  <h2>{banker}</h2>
                </IdeaCardUserProfile>
                <div>
                  <RouteLink to="/login">수정</RouteLink>
                  <Button tertiary danger onClick={onWarnningToggle}>
                    삭제
                  </Button>
                </div>
              </SpaceBetween>
            </div>
            <RouteLink to={`/idea/${id}`}>{title}</RouteLink>
            <p>{article}</p>

            <ViewLikeWrapper>
              <SpaceBetween>
                <h3>{price}원</h3>
                <div>
                  <FontAwesomeIcon icon={faEye} />
                  <span>{view}회</span>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{liker}명</span>
                </div>
              </SpaceBetween>
            </ViewLikeWrapper>
          </>
        )}
      </IdeaCardWrapper>
    );
  } else {
    return (
      <IdeaCardWrapper>
        <IdeaCardUserProfile>
          <img src={logo} alt="뱅크에리어" />
          <h2>{banker}</h2>
        </IdeaCardUserProfile>
        <RouteLink to={`/idea/${id}`}>{title}</RouteLink>
        <p>{article}</p>

        <ViewLikeWrapper>
          <SpaceBetween>
            <h3>{price}원</h3>
            <div>
              <FontAwesomeIcon icon={faEye} />
              <span>{view}회</span>
              <FontAwesomeIcon icon={faHeart} />
              <span>{liker}명</span>
            </div>
          </SpaceBetween>
        </ViewLikeWrapper>
      </IdeaCardWrapper>
    );
  }
};

const WarnningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 1rem;
  }
  & img {
    width: 40px;
    height: 40px;
  }
`;

export default IdeaCard;
