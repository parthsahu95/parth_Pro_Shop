import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {new Array(5).fill(0).map((elem, index) => {
        return (
          <span key={index}>
            <i
              style={{ color: color }}
              className={
                value >= index + 1
                  ? "fas fa-star"
                  : value >= index + 0.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
        );
      })}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#ffc01e",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
