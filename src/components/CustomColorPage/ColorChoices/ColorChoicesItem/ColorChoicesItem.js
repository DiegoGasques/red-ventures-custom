import React from "react";
import "./ColorChoicesItem.css";

export const ColorChoicesItem = ({ id, label, price, onClick, active }) => {
  const handleClick = () => onClick(id);
  return (
    <div className="ColorChoicesItem" onClick={handleClick}>
      <div className={`color-border ${active ? "active" : ""}`}>
        <img
          src={`/assets/dot-${id}.png`}
          alt="Color"
          className="color-image"
        />
      </div>
      <div className={`color-description ${active ? "active" : ""}`}>
        <p className="color-name">{label}</p>
        <p className="color-price">
          {parseInt(price) === 0 ? "Included" : `+ $${price}`}
        </p>
      </div>
    </div>
  );
};

export default ColorChoicesItem;
