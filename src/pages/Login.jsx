import dotenv from "dotenv";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SocialLogin from "../components/SocialLogin";
import { Input } from "../style/atoms";

dotenv.config();

const DEV_IP = "http://192.168.1.230:8080";
axios.defaults.baseURL = DEV_IP;

const LoginPositioner = styled.div`
  width: 100%;
`;

const LoginContainer = styled.div`
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
      // history.push("/");
    });
  };

  return (
    <>
      <LoginPositioner>
        <LoginContainer>
          <Title>로그인</Title>
          <form onSubmit={LoginRequestHandler}>
            <div>
              <label htmlFor="userId">아이디</label>
            </div>

            <Input
              type="text"
              value={userId}
              onChange={userIdHandler}
              placeholder="아이디를 입력하세요"
              full
            />
            <div>
              <div>
                <label htmlFor="userPassword">비밀번호</label>
                <Link to="findPassword">비밀번호 찾기</Link>
              </div>
              <Input
                type="password"
                value={userPassword}
                onChange={userPasswordHandler}
                placeholder="비밀번호를 입력하세요"
                full
              />
            </div>
            <input type="submit" value="로그인" />
          </form>
          <div>
            <span>계정이 없다면?</span>
            <Link to="/register">게정 만들기</Link>
          </div>
          <div>
            <span>또는</span>
          </div>
          <SocialLogin />
        </LoginContainer>
      </LoginPositioner>
    </>
  );
};

export default Login;