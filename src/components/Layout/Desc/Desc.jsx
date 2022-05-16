import propTypes from "prop-types";
import classNames from "classnames";
import "./Desc.scss";
import { useEffect, useState } from "react";


const Descr = ({ isPrimary, isSecondary, className, children, isActive, skillValue, inline_block }) => {
  const classes = classNames("defaultStyles ", className, {
    isPrimary,
    isSecondary,
    inline_block
  });
  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(children);

  useEffect(() => {
    if(!value) {
      setValue('Enter text')
    }
  }, [value]);

 
  const desc = isEdit ? (
    <>
      <p
        onClick={() => setIsEdit(false)}
        className={classes }
      >
        {value}
      </p>{" "}
      {skillValue && (
        <p style={{ display: "inline-block" }}>{"- " + skillValue}</p>
      )}
    </>
  ) : (
    <input
      autoFocus
      type={"text"}
      className={classes}
      onChange={(ev) => setValue(ev.target.value)}
      value={value}
      onBlur={() => setIsEdit(true)}
    />
  );
  return isActive ?  desc : <p className={classes}>{value}</p>;
};

Descr.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  isActive: propTypes.bool
};

Descr.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: "",
  isActive: true
};

export default Descr;
