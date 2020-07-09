import React from "react";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>
        <Link to="/write">
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <Link to="/my">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </>
  );
};

export default Profile;
