import React from "react";
import "./EngineChoicesItem.css";

export const EngineChoicesItem = ({
  id,
  onClick,
  kwh,
  type,
  range,
  price,
  active
}) => {
  const handleClick = () => onClick(id);
  return (
    <div className="EngineChoicesItem" onClick={handleClick}>
      <div className={`type ${active ? "active" : ""}`}>
        {kwh} <span>{type}</span>
      </div>
      <div className={`kwh ${active ? "active" : ""}`}>{kwh} kwh</div>
      <div className={`range ${active ? "active" : ""}`}>
        {range} miles range
      </div>
      <div className={`indicator ${active ? "show" : ""}`} />
      <div className={`add-price ${active ? "show" : ""}`}>
        {parseInt(price) === 0 ? "Included" : `+ $${price}`}
      </div>
    </div>
  );
};

export default EngineChoicesItem;
