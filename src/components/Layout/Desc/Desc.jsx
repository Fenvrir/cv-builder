import propTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";

function Desc({ children, className, ...attrs }) {
  const [isEdit, setIsEdit] = useState(false);
  const classes = classNames("text-xl ", className, {});

  return (isEdit 
    ? <input autoFocus value={children} onBlur={() => setIsEdit(!isEdit)} className={classes}  />
    : <p className={classes} onClick={() => setIsEdit(!isEdit)} {...attrs}>
      {children}
    </p>)
}

Desc.propTypes = {
  children: propTypes.node.isRequired,
};

Desc.defaultProps = {};

export default Desc;
