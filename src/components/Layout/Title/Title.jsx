import propTypes from "prop-types";
import classNames from "classnames";

function Title({children, className}) {


  return <p contentEditable className="text-3xl font-bold ">{children}</p>;
}

Title.propTypes = {
  children: propTypes.node.isRequired
}

export default Title;
