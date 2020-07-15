import React from "react";
import MyProfile from "../components/MyProfile";

const dummyData = "narciss";

const MyProfileContainer = () => {
  return <MyProfile banker={dummyData} />;
};

export default MyProfileContainer;
