import propTypes from "prop-types";
import classNames from "classnames";
import "./Title.scss";
import { useState } from "react";
import { PlusIcon, PencilIcon } from "@heroicons/react/solid";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  button,
  .icon {
    display: inline-block;
    border: none;
    transition: 0.1s all ease;
    opacity: 0 !important;
    background-color: #fff;
  }
  .icon {
    width: 20px;
    cursor: pointer;
  }

  .icon_pencil {
    cursor: auto;
    margin-left: 3px;
  }

  &:hover button {
    opacity: 1 !important;
  }
  &:hover .icon {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`;

const Title = ({
  size, isUppercase, className,
  children, isActive, isShowButton,
  onClick, isShowTextEdit,
}) => {
  const classes = classNames(` isH${size}`, className, { isUppercase });

  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(children);

  const inputHandler = (ev) => {
    if (!ev.target.value) {
      setValue("Enter text");
    }
    setIsEdit(true);
  };

  const title = isEdit ? (
    <Container>
      <p
        onClick={() => setIsEdit(false)}
        className={classes}
      >
        {value}
      </p>
      <>
        {isShowTextEdit && <PencilIcon className="icon icon_pencil" />}
        {isShowButton && (
          <button onClick={() => onClick()}>
            <PlusIcon className="icon" />
          </button>
        )}
      </>
    </Container>
  ) : (
    <input
      autoFocus
      type={"text"}
      placeholder="Enter text"
      text_field__input={true}
      className={classes}
      onChange={(ev) => setValue(ev.target.value)}
      value={value}
      onBlur={(ev) => inputHandler(ev)}
    />
  );

  return isActive ? <p className={classes}>{value}</p> : title;
};

Title.propTypes = {
  isUppercase: propTypes.bool,
  size: propTypes.oneOf(["1", "2", "3"]),
  isActive: propTypes.bool,
  isShowButton: propTypes.bool,
  isShowTextEdit: propTypes.bool,
};

Title.defaultProps = {
  isUppercase: false,
  size: "2",
  isActive: false,
  isShowButton: false,
  isShowTextEdit: false,
};

export default Title;
