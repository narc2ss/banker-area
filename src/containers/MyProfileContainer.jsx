import React from "react";
import MyProfile from "../components/MyProfile";
import { useSelector } from "react-redux";

const MyProfileContainer = () => {
  const { banker } = useSelector((state) => ({
    banker: state.auth.user,
  }));
  return <MyProfile banker={banker} />;
};

export default MyProfileContainer;
