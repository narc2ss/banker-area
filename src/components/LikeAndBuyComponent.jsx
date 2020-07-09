import React from "react";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeAndBuyComponent = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </>
  );
};

export default LikeAndBuyComponent;
