import React from "react";
import IdeaCardContainer from "../containers/IdeaCardContainer";

const dummy = [{}, {}, {}, {}, {}, {}, {}, {}];

const Bought = () => {
  return (
    <>
      <IdeaCardContainer ideaCards={dummy} />
    </>
  );
};

export default Bought;
