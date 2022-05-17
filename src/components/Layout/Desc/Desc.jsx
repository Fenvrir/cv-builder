import propTypes from "prop-types";
import classNames from "classnames";
import "./Desc.scss";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";


const Descr = ({
  isPrimary,
  isSecondary,
  className,
  children,
  isActive,
  skillValue,
  inline_block,
  isTextEdit
}) => {
  const classes = classNames("defaultStyles ", className, {
    isPrimary,
    isSecondary,
    inline_block,
  });
  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(children);

  const inputHandler = (ev) => {
    if (!ev.target.value) {
      setValue("Enter text");
    }
    setIsEdit(true);
  };

  const desc = isEdit ? (
    <>
      <p onClick={() => setIsEdit(false)} className={classes}>
        {value}
      {<PencilIcon width={'20px'} className="icon_pencil"/>}
      </p>{" "}
      {skillValue && (
        <p style={{ display: "inline-block" }}>{"- " + skillValue}</p>
      )}
    </>
  ) : (
    <input
      autoFocus
      placeholder="Enter text"
      type={"text"}
      className={classes}
      onChange={(ev) => setValue(ev.target.value)}
      value={value}
      onBlur={(ev) => inputHandler(ev)}
    />
  );
  return isActive ? desc : <p className={classes}>{value}</p>;
};

Descr.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  isActive: propTypes.bool,
  isTextEdit: propTypes.bool
};

Descr.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: "",
  isActive: true,
  isTextEdit: false
};

export default Descr;
