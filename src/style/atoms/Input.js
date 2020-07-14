import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => (props.full ? "100%" : "auto")};
  border: 1px solid #e1e3f2;
  border-radius: 3px;
  height: 2.25rem;
  padding: 0.25em 1em;
`;

const Input = ({ label, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <StyledInput {...rest} />
    </>
  );
};

export default Input;
