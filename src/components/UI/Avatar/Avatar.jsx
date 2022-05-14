import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { CameraIcon } from "@heroicons/react/solid";

function Avatar({ onClick }) {
  const [isSquare, setIsSquare] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const rounded = isSquare ? "rounded-lg" : "rounded-[50%]";

  const imgClasses = classNames(
    " flex items-center hover:cursor-pointer justify-center w-40 h-40   " + rounded
  );
  return (
    <div onClick={onClick} className={"w-40 h-40 bg-[#bfbfbf]  " + rounded}>
      <input
        className="  hidden "
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        value=""
        id="Avatar"
      />
      <label className={imgClasses} htmlFor="Avatar">
        {preview ? (
          <div
            className={imgClasses}
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          ></div>
        ) : (
          <CameraIcon
            className=" w-32 text-gray-600"
            aria-hidden="true"
          />
        )}
      </label>
    </div>
  );
}

Avatar.propTypes = {
  onClick: propTypes.func,
};

Avatar.defaultProps = {
  onClick: () => {},
};
export default Avatar;
