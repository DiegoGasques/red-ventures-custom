import React from "react";
import Spec from "./Spec/Spec";

export const SpecBar = () => {
  return (
    <div className="SpecBar">
      <Spec primary="2.5" units="s" subText="From 0 to 100" />
      <Spec primary="420" units="mi" subText="Miles range" />
      <Spec primary="250" units="mp/h" subText="Max speed" />
    </div>
  );
};

export default SpecBar;
