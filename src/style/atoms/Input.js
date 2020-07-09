import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => (props.full ? "100%" : "auto")};
  border: 1px solid #e1e3f2;
  border-radius: 3px;
  padding: 0.25em 1em;
`;

export default Input;
