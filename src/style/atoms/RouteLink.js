import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.titanWhite};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.palette.cloudBurst};
    `}
`;

const RouteLink = ({ children, secondary, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default RouteLink;
