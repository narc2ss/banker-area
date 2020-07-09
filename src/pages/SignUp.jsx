import dotenv from "dotenv";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SocialLogin from "../components/SocialLogin";
import { Input } from "../style/atoms";

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
          <label htmlFor="userPassword">이메일</label>
          <Input
            type="email"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="이메일을 입력하세요"
            full
          />
          <label htmlFor="userId">아이디</label>
          <Input
            type="text"
            value={userId}
            onChange={userIdHandler}
            placeholder="아이디를 입력하세요"
            full
          />
          <label htmlFor="userPassword">비밀번호</label>
          <Input
            type="password"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="비밀번호를 입력하세요"
            full
          />
          <label htmlFor="userPassword">비밀번호 확인</label>
          <Input
            type="password"
            value={userPassword}
            onChange={userPasswordHandler}
            placeholder="비밀번호를 입력하세요"
            full
          />
          <input type="submit" value="회원가입" />
        </form>
        <div>
          <span>계정이 있으신가요?</span>
          <Link to="/login">로그인 하기</Link>
        </div>
        <span>또는</span>
        <SocialLogin />
      </SignUpContainer>
    </>
  );
};

export default Login;
