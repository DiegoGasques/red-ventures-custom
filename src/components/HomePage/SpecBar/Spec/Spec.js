import React from "react";

export const Spec = ({ primary, units, subText }) => {
  return (
    <div className="Spec">
      <p className="primary">
        {primary} <span>{units}</span>
      </p>
      <p className="secondary">{subText}</p>
    </div>
  );
};

export default Spec;
