import React from "react";
import styled from "styled-components";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../static/img/logo.png";
import { Button } from "../style/atoms";
import { Link } from "react-router-dom";

const IdeaCardContainer = styled.div`
  width: 300px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ProfileImage = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
`;

const IdeaCard = (edit, props) => {
  const { banker, article, price, view, liker } = props;
  if (edit) {
    return (
      <IdeaCardContainer>
        <div>
          <Link to="/idea/edit/:id">수정</Link>
          <Button value="삭제" primary />
        </div>
        <div>
          <ProfileImage src={logo} />
          <h1>{banker}</h1>
        </div>
        <p>{article}</p>
        <h3>{price}원</h3>
        <h4>
          <FontAwesomeIcon icon={faEye} />
          {view}회
        </h4>
        <h4>
          <FontAwesomeIcon icon={faHeart} />
          {liker}명
        </h4>
      </IdeaCardContainer>
    );
  }

  return (
    <IdeaCardContainer>
      <div>
        <ProfileImage src={logo} />
        <h1>{banker}</h1>
      </div>
      <p>{article}</p>
      <h3>{price}원</h3>
      <h4>
        <FontAwesomeIcon icon={faEye} />
        {view}회
      </h4>
      <h4>
        <FontAwesomeIcon icon={faHeart} />
        {liker}명
      </h4>
    </IdeaCardContainer>
  );
};

export default IdeaCard;
