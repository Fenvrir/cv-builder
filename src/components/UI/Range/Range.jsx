import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import Desc from "../../Layout/Desc/Desc";

function Range({ onClick }) {
  const [value, setValue] = useState(50);

  return (
    <div>
      <Desc skillValue={value} className={"text-gray-500"}>Name:</Desc>
      <input
        className=" w-36"
        onChange={(e) => setValue(e.target.value)}
        type={"range"}
        value={value}
        max={100}
        min={0}
        step={10}
      />
    </div>
  );
}

Range.propTypes = {
  onClick: propTypes.func,
};

Range.defaultProps = {
  onClick: () => {},
};
export default Range;
