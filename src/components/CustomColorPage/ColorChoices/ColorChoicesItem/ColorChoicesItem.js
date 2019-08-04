import React from "react";

export const ColorChoicesItem = ({ id, label, price, onClick, className }) => {
  const handleClick = () => onClick(id);
  return (
    <div
      className={`ColorChoicesItem ${className ? className : ""}`}
      onClick={handleClick}
    >
      <div className="color-border">
        <img
          src={`/assets/dot-${id}.png`}
          alt="Color"
          className="color-image"
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

export default ColorChoicesItem;
