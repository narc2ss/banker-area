import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import logo from "../static/img/logo.png";
import MyIdea from "../components/MyIdea";
import Bought from "../components/Bought";
import Like from "../components/Like";
import Info from "../components/Info";
import { useDispatch } from "react-redux";
import { logOut } from "../modules/user";
import { Button } from "../style/atoms";

const activeStyle = {
  fontWeight: 700,
};

const My = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    // dispatch(logOut);
  };
  return (
    <>
      <div>
        <img src={logo} alt="profileImage" />
        <h1>Narciss</h1>
      </div>
      <Button type="button" onClick={onLogOut()}>
        로그아웃
      </Button>
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
