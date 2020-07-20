import React from "react";
import { useSelector } from "react-redux";
import PreviewIdea from "../components/PreviewIdea";

const PreviewIdeaContainer = () => {
  const idea = useSelector((state) => {
    return state.idea.temp;
  });
  const banker = useSelector((state) => {
    return state.auth.user;
  });

  if (!banker && !idea) return <h1>로딩중</h1>;

  return (
    <>
      <PreviewIdea idea={idea} banker={banker} />
    </>
  );
};

export default PreviewIdeaContainer;
