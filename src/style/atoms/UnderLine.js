import styled, { css } from "styled-components";

const UnderLine = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 2px;
  background: ${(props) => props.theme.palette.cloudBurst};

  ${(props) =>
    props.secondary &&
    css`
      height: 1px;
      width: 100%;
      background: ${props.theme.palette.gray};
    `}
`;

export default UnderLine;
