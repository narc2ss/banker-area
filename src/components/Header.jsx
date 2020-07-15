import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../static/img/logo.png";
import Profile from "../components/Profile";
import RouteLink from "../style/atoms/RouteLink";
import { useSelector } from "react-redux";
import { SearchBar } from "../style/molecules";

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

const Header = () => {
  const { isLoggined } = useSelector((state) => ({
    isLoggined: state.user.isLoggedIn,
  }));
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
        {isLoggined ? (
          <Profile />
        ) : (
          <RouteLink to="/login" secondary>
            로그인
          </RouteLink>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
