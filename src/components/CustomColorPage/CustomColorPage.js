import React, { useState } from "react";
import { connect } from "react-redux";
import CustomPageLayout from "../CustomPageLayout/CustomPageLayout";
import ColorChoices from "./ColorChoices/ColorChoices";

export const CustomColorPage = ({ description }) => {
  const [idActive, setIdActive] = useState(null);

  return (
    <div className="CustomColorPage">
      <CustomPageLayout page={2}>
        <div className="main-content">
          <div className="car-color-image">
            <img src={`/assets/color-${idActive}.png`} alt="Car" />
          </div>
          <div className="color-selection">
            <h3>Color</h3>
            <p className="description">{description}</p>
            <div className="choises-container">
              <ColorChoices onChange={setIdActive} />
            </div>
          </div>
        </div>
      </CustomPageLayout>
    </div>
  );
};

const mapStateToProps = ({ color }) => ({
  description: color.description
});

export default connect(mapStateToProps)(CustomColorPage);
