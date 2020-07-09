import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const IconContainer = styled.span``;

const ViewToggleButton = ({ disable }) => {
  const [view, setView] = useState(false);

  const ViewHandler = () => {
    setView(!view);
  };

  if (disable) {
    return (
      <IconContainer>
        <FontAwesomeIcon icon={faEye} />
      </IconContainer>
    );
  }

  return (
    <IconContainer onClick={ViewHandler}>
      {view ? (
        <FontAwesomeIcon icon={faEye} />
      ) : (
        <>
          <FontAwesomeIcon icon={faEyeSlash} />
        </>
      )}
    </IconContainer>
  );
};

export default ViewToggleButton;
