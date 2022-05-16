import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? "10px" : "50%")};
  background-color: #bfbfbf;
  margin: 0 auto;

  input {
    display: none;
  }

  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? "10px" : "50%")};
  }
`;

function Avatar({ isSquare }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    let objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Wrapper isSquare={isSquare}>
      <input
        id="Avatar"
        value=""
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <label htmlFor="Avatar">
        {preview ? (
          <div
            style={{
              backgroundImage: `url(${preview})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
            }}
          ></div>
        ) : (
          "Upload image"
        )}
      </label>
    </Wrapper>
  );
}

Avatar.propTypes = {
  onClick: propTypes.func,
  isSquare: propTypes.bool,
};

Avatar.defaultProps = {
  onClick: () => {},
  isSquare: true,
};
export default Avatar;
