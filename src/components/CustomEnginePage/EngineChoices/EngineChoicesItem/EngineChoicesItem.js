import React from "react";
import "./EngineChoicesItem.css";

export const EngineChoicesItem = ({
  kwh,
  type,
  range,
  price,
  className,
  onClick
}) => {
  return (
    <div
      className={`EngineChoicesItem ${className ? className : ""}`}
      onclick={() => {
        console.log("I am here");
        onClick();
      }}
    >
      <div className="type">
        {kwh} <span>{type}</span>
      </div>
      <div className="kwh">{kwh} kwh</div>
      <div className="range">{range} miles range</div>
      <div className="indicator" />
      <div className="add-price">
        {parseInt(price) === 0 ? "Included" : `+ $${price}`}
      </div>
    </div>
  );
};

export default EngineChoicesItem;
