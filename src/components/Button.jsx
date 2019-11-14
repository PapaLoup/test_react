import React from "react";
import PropTypes from "prop-types";

export function Button({ onClick, title }) {
  return <button onClick={onClick}>{title}</button>;
}

Button.propTypes = { onClick: PropTypes.func, title: PropTypes.string };
Button.defaultProps = { onClick: () => {}, title: "default" };
