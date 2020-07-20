import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

import OAuth from "../components/OAuth";
import { Input, Button } from "../style/atoms";
import RouteLink from "../style/atoms/RouteLink";

dotenv.config();

const FadeSignUpContainer = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SignUpContainer = styled.div`
  width: 700px;
  margin: 3rem auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 10px;
  animation: ${FadeSignUpContainer} 1s ease-in;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const DescriptionFont = styled.div`
  font-size: .85rem;
  text-align: center;
  margin-bottom: .3rem;
  a {
    text-decoration: underline;
    &:hover {
      color: black;
      transition: 0.3s ease-in;
    }
  }
`;

const OAuthTooltip = styled.div`
  width: 350px;
  margin: 3rem auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 130px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 10px;
  cursor: default;
  opacity: 0;
`;

const OrDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: slategray;
  color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-bottom: .3rem;
  cursor: pointer;
  &:hover {
    opacity: .7;
    ${OAuthTooltip} {
      opacity: 1;
      transition: 0.3s ease-in;
    }
  }
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const userPasswordCheckHandler = (e) => {
    setUserPasswordCheck(e.target.value);
  };

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const LoginRequestHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/users/account/signup",
      data: {
        email: userEmail,
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
            value={userEmail}
            onChange={userEmailHandler}
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
            value={userPasswordCheck}
            onChange={userPasswordCheckHandler}
            placeholder="비밀번호를 한번 더 입력하세요"
            label="비밀번호 확인"
            full
          />
          <DescriptionFont>
            회원가입 버튼을 누르시면 <RouteLink to="/tos">이용약관</RouteLink>및
            <RouteLink to="/privacy">개인정보 처리방침</RouteLink>에 동의하시는
            것으로 간주 됩니다.
          </DescriptionFont>
          <Button type="submit" full>
            회원가입
          </Button>
        </form>
        <DescriptionFont>
          계정이 있으신가요? <RouteLink to="/login">로그인 하기</RouteLink>
        </DescriptionFont>
        <OrDiv>
          OR
          <OAuthTooltip className="OAuthTooltip">
            <OAuth type="signUp" />
          </OAuthTooltip>
        </OrDiv>
      </SignUpContainer>
      
    </>
  );
};

export default Login;
