import React from "react";
import { useSelector } from "react-redux";
import PreviewIdea from "../components/PreviewIdea";

const PreviewIdeaContainer = () => {
  const idea = useSelector((state) => {
    return state.idea;
  });

  return (
    <>
      <PreviewIdea idea={idea} />
    </>
  );
};

export default PreviewIdeaContainer;
