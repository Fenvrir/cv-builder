import propTypes from "prop-types";
import classNames from "classnames";
import "./Title.scss";
import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  button {
    display: inline-block;
    border: none;
    transition: 0.1s all ease;
    opacity: 0 !important;
    background-color: #fff;
    .icon {
      width: 20px;
      cursor: pointer;
    }
  }
  &:hover button {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`;

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

  useEffect(() => {
    if (!value) {
      setValue("Enter text");
    }
  }, [value]);

  const title = isEdit ? (
    <Container>
      <p
        style={{ display: "inline-block" }}
        onClick={() => setIsEdit(false)}
        className={classes}
      >
        {value}
      </p>
      {isShowButton && (
        <button onClick={() => onClick()} style={{ display: "inline-block" }}>
          <PlusIcon className="icon" />
        </button>
      )}
    </Container>
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
