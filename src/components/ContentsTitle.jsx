import React from "react";
import { Title, UnderLine } from "../style/atoms";

const ContentsTitle = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
      <UnderLine />
    </>
  );
};

export default ContentsTitle;
