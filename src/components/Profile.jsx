import React from "react";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RouteLink from "../style/atoms/RouteLink";

const Profile = () => {
  return (
    <>
      <div>
        <RouteLink to="/write" secondary>
          <FontAwesomeIcon icon={faPen} />
        </RouteLink>
        <RouteLink to="/my" secondary>
          <FontAwesomeIcon icon={faUser} />
        </RouteLink>
      </div>
    </>
  );
};

export default Profile;
