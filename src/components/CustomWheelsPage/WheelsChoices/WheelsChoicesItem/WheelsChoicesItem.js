import React from "react";

export const WheelsChoicesItems = ({
  id,
  label,
  price,
  onClick,
  className
}) => {
  return (
    <div
      className={`WheelsChoicesItems ${className ? className : ""}`}
      onClick={onClick}
    >
      <div className="wheel-image-container">
        <img
          src={`/assets/wheel-${id}.png`}
          alt="Color"
          className="wheel-image"
        />
      </div>
      <div className="color-description">
        <p className="color-name">{label}</p>
        <p className="color-price">
          {parseInt(price) === 0 ? "Included" : `+ $${price}`}
        </p>
      </div>
    </div>
  );
};

export default WheelsChoicesItems;
