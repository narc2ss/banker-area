import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import OAuth from "../components/OAuth";
import { Input, Button } from "../style/atoms";
import RouteLink from "../style/atoms/RouteLink";

dotenv.config();

const SignUpContainer = styled.div`
  width: 700px;
  margin: 3rem auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const LoginRequestHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/users/account/signin",
      data: {
        id: userId,
        password: userPassword,
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <SignUpContainer>
        <Title>회원가입</Title>
        <form onSubmit={LoginRequestHandler}>
          <Input
            type="email"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="이메일을 입력하세요"
            label="이메일"
            full
          />
          <Input
            type="text"
            value={userId}
            onChange={userIdHandler}
            placeholder="아이디를 입력하세요"
            label="아이디"
            full
          />
          <Input
            type="password"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
            full
          />
          <Input
            type="password"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="비밀번호를 입력하세요"
            label="비밀번호 확인"
            full
          />
          <Button type="submit" full>
            회원가입
          </Button>
        </form>
        <div>
          <span>계정이 있으신가요?</span>
          <RouteLink to="/login" secondary>
            로그인 하기
          </RouteLink>
          <RouteLink to="/">라우터링크</RouteLink>
        </div>
        <span>또는</span>
        <OAuth type="signUp" />
      </SignUpContainer>
    </>
  );
};

export default Login;
