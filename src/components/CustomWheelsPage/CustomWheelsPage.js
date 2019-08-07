import React from "react";
import CustomPageLayout from "../CustomPageLayout/CustomPageLayout";
import WheelsChoices from "./WheelsChoices/WheelsChoices";

export const CustomWheelsPage = () => {
  return (
    <div className="CustomWheelsPage">
      <CustomPageLayout page={3}>
        <div className="main-content">
          <h3>Wheels</h3>
          <div className="choises-container">
            <WheelsChoices />
          </div>
        </div>
      </CustomPageLayout>
    </div>
  );
};

export default CustomWheelsPage;
