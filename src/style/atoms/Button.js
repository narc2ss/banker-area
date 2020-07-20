import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.palette.cloudBurst};
  
  &:hover {
    border: 2px solid blue;
    opacity: .7;
    transition: 0.25s ease-in;
  }
  
  ${(props) =>
    props.secondary &&
    css`
      background: ${(props) => props.theme.palette.titanWhite};
      color: ${(props) => props.theme.palette.cloudBurst};
    `}

  ${(props) =>
    props.tertiary &&
    css`
      background: none;
      color: ${(props) => props.theme.palette.titanWhite};
      font-weight: normal;
    `}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

    /* big */
  ${(props) =>
    props.big &&
    css`
      height: 4rem;
      font-size: 2rem;
    `}

  ${(props) =>
    props.small &&
    css`
      height: 1.2rem;
    `}

  ${(props) =>
    props.danger &&
    css`
      color: ${(props) => props.theme.palette.wildWatermelon};
    `}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
