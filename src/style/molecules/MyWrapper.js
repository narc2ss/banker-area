import styled from "styled-components";

export const MyWrapper = styled.div`
  & ul {
    display: flex;
    margin: 1rem;
    padding: 1rem;

    li + li {
      margin-left: 1rem;
    }
  }
`;
