import React from "react";
import PropTypes from "prop-types";

export function Image({ title, src }) {
  return (
    <div>
      <img src={src} alt={title} />
      <div>{title}</div>
    </div>
  );
}

Image.propTypes = {title: PropTypes.string, src: PropTypes.string}
Image.defaultProps = {title: "default", src: "https://picsum.photos/400"}