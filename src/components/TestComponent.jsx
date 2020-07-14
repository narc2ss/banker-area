import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
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

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: ${(props) => props.theme.palette.cloudBurst};

  /* 기타 */

  /* full */
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
    props.secondary &&
    css`
      background: ${(props) => props.theme.palette.titanWhite};
      color: ${(props) => props.theme.palette.cloudBurst};
    `}
`;

const TestComponent = ({ name }) => {
  return (
    <>
      <StyledButton>Hello, {name}</StyledButton>
    </>
  );
};

export default TestComponent;
