import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Desc from "../../Layout/Desc/Desc";
import "./Range.scss";
import styled from "styled-components";
const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
`;

const Input = styled.input`
  width: 97%;
  height: 6px;
  margin: 0 0.4rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background: #ddd;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #999;
  }
`;
function Range({ onClick }) {
  const [value, setValue] = useState(60);

  return (
    <Wrapper>
      <Desc inline_block skillValue={value}>Name </Desc>
      <input
        className={"text-gray-500"}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
        type={"range"}
        value={value}
        max={100}
        min={0}
        step={10}
      />
    </Wrapper>
  );
}

Range.propTypes = {
  onClick: propTypes.func,
};

Range.defaultProps = {
  onClick: () => {},
};
export default Range;
