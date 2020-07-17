import styled from "styled-components";

export const IdeaCardPositioner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IdeaCardWrapper = styled.div`
  width: 300px;
  margin: 0.5rem 0.5rem;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #fff;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-3px);
    transition: 0.3s;
  }

  & a {
    margin: 0.5rem 0;
  }

  & p {
    margin: 0.5rem 0;
    font-size: 0.825rem;
    color: ${(props) => props.theme.palette.black};
  }
`;

export const IdeaCardUserProfile = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  & img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
  }

  & h2 {
    display: inline-block;
    margin: 0.25rem 1rem 0.25rem 0;
    font-size: 1.1rem;
    font-weight: normal;
    color: ${(props) => props.theme.palette.codGray};
  }
`;

export const ViewLikeWrapper = styled.div`
  color: ${(props) => props.theme.palette.gray};
  font-size: 0.8rem;

  & h3 {
    margin: 0;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.cloudBurst};
  }

  & span {
    margin-left: 0.2rem;
  }
  & svg {
    margin-left: 0.5rem;
  }
`;
