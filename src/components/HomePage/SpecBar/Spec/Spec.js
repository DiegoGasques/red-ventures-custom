import React from "react";
import "./Spec.css";

export const Spec = ({ primary, units, subText }) => {
  return (
    <div className="Spec">
      <p className="Spec__primary">
        {primary} <span>{units}</span>
      </p>
      <p className="Spec__secondary">{subText}</p>
    </div>
  );
};

export default Spec;
