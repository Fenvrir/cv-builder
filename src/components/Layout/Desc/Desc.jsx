import propTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";

function Desc({ children, className, skillValue, ...attrs }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(children);
  const classes = classNames("text-sm box-border ", className, {});

  return (
    <div className=" mb-1 box-border">
      {isEdit ? (
        <input
          autoFocus
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => setIsEdit(!isEdit)}
          className={classes}
        />
      ) : (
        <p className={classes} onClick={() => setIsEdit(!isEdit)} {...attrs}>
          {value}
        </p>
      )}
      {skillValue && <p className=" inline-block">{skillValue}</p>}
    </div>
  );
}

Desc.propTypes = {
  children: propTypes.node.isRequired,
};

Desc.defaultProps = {};

export default Desc;
