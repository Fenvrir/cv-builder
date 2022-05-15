import propTypes from "prop-types";
import classNames from "classnames";
import "./Title.scss";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const Title = ({
  size,
  isUppercase,
  className,
  children,
  isActive,
  isShowButton,
  onClick,
}) => {
  const classes = classNames(` isH${size}`, className, { isUppercase });

  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(children);

  const title = isEdit ? (
    <>
      <p
        style={{ display: "inline-block" }}
        onClick={() => setIsEdit(false)}
        className={classes}
      >
        {value}
      </p>
      {isShowButton && (
        <button 
        onClick={() => onClick()}
        style={{ display: "inline-block", }}>
          <PlusIcon width={"20px"} />
        </button>
      )}
    </>
  ) : (
    <input
      autoFocus
      type={"text"}
      text_field__input={true}
      className={classes}
      onChange={(ev) => setValue(ev.target.value)}
      value={value}
      onBlur={() => setIsEdit(true)}
    />
  );
  return isActive ? <p className={classes}>{value}</p> : title;
};

Title.propTypes = {
  isUppercase: propTypes.bool,
  size: propTypes.oneOf(["1", "2", "3"]),
  isActive: propTypes.bool,
  isShowButton: propTypes.bool,
};

Title.defaultProps = {
  isUppercase: false,
  size: "2",
  isActive: false,
  isShowButton: false,
};

export default Title;
