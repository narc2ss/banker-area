import React from "react";
import { Route, Switch } from "react-router-dom";

import MyIdea from "../components/MyIdea";
import Bought from "../components/Bought";
import Like from "../components/Like";
import Info from "../components/Info";
import MyProfileContainer from "../containers/MyProfileContainer";
import { Button, NavLink } from "../style/atoms";
import { SpaceBetween } from "../style/positions";
import { MyWrapper } from "../style/molecules";

const activeStyle = {
  borderBottom: `2px solid #263163`,
};

const My = () => {
  return (
    <>
      <MyWrapper>
        <SpaceBetween>
          <MyProfileContainer />
          <Button type="button" tertiary>
            로그아웃
          </Button>
        </SpaceBetween>
        <ul>
          <li>
            <NavLink to="/my" activeStyle={activeStyle} exact>
              나의 아이디어
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/buy" activeStyle={activeStyle}>
              구매 목록
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/like" activeStyle={activeStyle}>
              관심 목록
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/info" activeStyle={activeStyle}>
              내 정보
            </NavLink>
          </li>
        </ul>
      </MyWrapper>
      <Switch>
        <Route path="/my" component={MyIdea} exact />
        <Route path="/my/buy" component={Bought} />
        <Route path="/my/like" component={Like} />
        <Route path="/my/info" component={Info} />
      </Switch>
    </>
  );
};

export default My;
