import styled from "styled-components";

const Button = styled.input.attrs({
  type: "button",
})`
  background: ${(props) => (props.primary ? "#fff" : "#E1E3F2")};
  color: ${(props) => (props.primary ? "#AFB5F1" : "#263163")};
  width: ${(props) => (props.full ? "100%" : "auto")};

  font-size: 1em;
  font-weight: 700;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  &:active {
    transform: translateY(3px);
  }
`;

export default Button;
