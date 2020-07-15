import styled from "styled-components";

const StyledSearchBar = styled.input.attrs({
  type: "search",
  placeholder: "어떤 획기적인 아이디어가 있는지 둘러볼까요?",
})`
  width: 500px;
  height: 2rem;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 50px;
  outline: none;
  color: ${(props) => props.theme.palette.gray};
  border: 3px solid ${(props) => props.theme.palette.melrose};

  &:focus {
    color: ${(props) => props.theme.palette.gray};
  }
`;

export default StyledSearchBar;
