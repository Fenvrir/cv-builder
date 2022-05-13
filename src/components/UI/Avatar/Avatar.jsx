import React, { useState } from "react";
import propTypes from "prop-types";

function Avatar({ onClick }) {
  const [isSquare, setIsSquare] = useState(false);
  const rounded = isSquare ? "rounded-lg" : "rounded-[50%]";

  return (
    <div
      onClick={onClick}
      className={"w-40 h-40 bg-gray-700 mr-16 " + rounded}
    ></div>
  );
}

Avatar.propTypes = {
  onClick: propTypes.func,
};

Avatar.defaultProps = {
  onClick: () => {},
};
export default Avatar;
