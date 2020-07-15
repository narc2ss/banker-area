import React from "react";

import logo from "../static/img/logo.png";
import { MyProfileWrapper } from "../style/molecules";

const MyProfile = ({ banker }) => {
  return (
    <>
      <MyProfileWrapper>
        <img src={logo} alt="profileImage" />
        <h1>{banker}</h1>
      </MyProfileWrapper>
    </>
  );
};

export default MyProfile;
