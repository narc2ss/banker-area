import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import KakaoLogin from "react-kakao-login";

import { Input, Button } from "../style/atoms";
import { useDispatch } from "react-redux";
import { RouteLink } from "../style/atoms";
import { login } from "../modules/auth";
import kakaoLoginImage from "../static/img/kakao_login_medium_wide.png";

dotenv.config();

const DEV_IP = "http://192.168.1.230:8080";
axios.defaults.baseURL = DEV_IP;

const LoginPositioner = styled.div`
  width: 100%;
`;

const FadeLoginContainer = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginContainer = styled.div`
  width: 700px;
  margin: 3rem auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 10px;
  animation: ${FadeLoginContainer} 1s ease-in;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const DescriptionFont = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.3rem;
  .RouteLink {
    font-size: 1.2rem;
    text-decoration: underline;
    &:hover {
      color: black;
      transition: 0.5s ease-in;
    }
  }
`;

const Login = ({ history, onLoginKakao }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();

  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const LoginRequestHandler = (e) => {
    e.preventDefault();
    dispatch(login(userId, userPassword, history));
  };

  const responseKaKao = (res) => {
    console.log(res);
  };

  const responseFail = (error) => {
    console.log(error);
  };
  return (
    <>
      <LoginPositioner>
        <LoginContainer>
          <Title>로그인</Title>
          <form onSubmit={LoginRequestHandler}>
            <Input
              type="text"
              value={userId}
              required
              onChange={userIdHandler}
              placeholder="아이디를 입력하세요"
              label="아이디"
              full
            />
            <div>
              <div></div>
              <Input
                type="password"
                value={userPassword}
                required
                onChange={userPasswordHandler}
                placeholder="비밀번호를 입력하세요"
                label="비밀번호"
                full
              />
            </div>
            <Button type="submit" full>
              로그인
            </Button>
          </form>
          <span>또는</span>

          <KakaoLogin
            jsKey="kakao-js-key"
            onSuccess={(result) => onLoginKakao(result)}
            onFailure={(result) => console.log(result)}
            getProfile={true}
          />
          <DescriptionFont>
            계정이 없다면?
            <RouteLink className="RouteLink" to="/register">
              계정 만들기
            </RouteLink>
            <span>비밀번호를 잊으셨나요?</span>
            <RouteLink className="RouteLink" to="findPassword">
              비밀번호 찾기
            </RouteLink>
          </DescriptionFont>
        </LoginContainer>
      </LoginPositioner>
    </>
  );
};

export default Login;
