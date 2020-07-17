import React from "react";
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
import { SpaceBetween } from "../style/positions";

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
  if (edit) {
    return (
      <IdeaCardWrapper>
        <div>
          <SpaceBetween>
            <IdeaCardUserProfile>
              <img src={logo} alt="뱅크에리어" />
              <h2>{banker}</h2>
            </IdeaCardUserProfile>
            <div>
              <RouteLink to="/login">수정</RouteLink>
              <Button tertiary danger>
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

export default IdeaCard;
