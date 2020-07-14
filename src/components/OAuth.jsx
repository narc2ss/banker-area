import React from "react";
import { Button } from "../style/atoms";

const OAuth = () => {
  return (
    <>
      <Button full>페이스북 로그인</Button>
      <Button full>카카오로그인 로그인</Button>
      <Button full>구글 로그인</Button>
    </>
  );
};

export default OAuth;
