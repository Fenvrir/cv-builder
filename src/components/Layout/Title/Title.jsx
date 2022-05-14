import propTypes from "prop-types";
import classNames from "classnames";

function Title({ children, className, isButton, onClick }) {
  const classes = classNames("font-bold mb-1 inline-block ", className, {});
  return (
    <>
      <p className={classes}>{children}</p>
      {isButton && (
        <button className=" ml-2 text-2xl text-cyan-800" onClick={() => onClick()}>
          +
        </button>
      )}
    </>
  );
}

Title.propTypes = {
  children: propTypes.node.isRequired,
};

export default Title;
