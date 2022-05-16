import { useState } from "react";
import propTypes from "prop-types";
import Desc from "../../Layout/Desc/Desc";
import "./Range.scss";
import styled from "styled-components";
const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
  p {
    margin: 0 0 5px 5px;
  }
  input {
    display: block;
    width: 175px;
    cursor: pointer;
  }
`;

function Range({ onClick }) {
  const [value, setValue] = useState(60);

  return (
    <Wrapper>
      <Desc inline_block skillValue={value}>
        Name
      </Desc>
      <input
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
