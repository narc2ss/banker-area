import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin: 0.25rem 0.5rem;

  color: ${(props) => props.theme.palette.cloudBurst};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.palette.titanWhite};
    `}
`;

const RouteLink = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default RouteLink;
