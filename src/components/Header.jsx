import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../static/img/logo.png";
import Profile from "../components/Profile";

const isLoggined = true;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background: #263163;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const LogoText = styled.h1`
  font-size: 1rem;
  color: #e1e3f2;
`;

const SearchBar = styled.input.attrs({
  type: "search",
  placeholder: "어떤 획기적인 아이디어가 있는지 둘러볼까요?",
})`
  width: 500px;
`;

// const LoginLink = styled.a.attrs({
//   href: "/login",
// })`
//   color: #e1e3f2;
//   font-weight: 700;
// `;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <LogoContainer>
            <LogoImg src={logo} alt="logo" />
            <LogoText>뱅커에리어</LogoText>
          </LogoContainer>
        </Link>
        <SearchBar />
        {isLoggined ? <Profile /> : <Link to="/login">로그인</Link>}
      </HeaderContainer>
    </>
  );
};

export default Header;
