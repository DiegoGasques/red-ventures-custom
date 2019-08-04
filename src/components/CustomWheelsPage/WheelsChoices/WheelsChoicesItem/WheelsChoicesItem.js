import React from "react";
import "./WheelsChoicesItem.css";

export const WheelsChoicesItems = ({ id, label, price, onClick, active }) => {
  const handleClick = () => onClick(id);
  return (
    <div className="WheelsChoicesItems" onClick={handleClick}>
      <div className={`wheel-image-container ${active ? "active" : ""}`}>
        <img
          src={`/assets/wheel-${id}.png`}
          alt="Color"
          className={`wheel-image ${active ? "active" : ""}`}
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

export default WheelsChoicesItems;
