import React from "react";
import { connect } from "react-redux";
import CustomPageLayout from "../CustomPageLayout/CustomPageLayout";
import EngineChoices from "./EngineChoices/EngineChoices";

export const CustomEnginePage = ({ custom }) => {
  return (
    <div className="CustomEnginePage">
      <CustomPageLayout page={1}>
        <div className="main-content">
          <div className="engine-image">
            <img
              src={`/assets/engine-${custom.length > 0 &&
                custom[custom.length - 1].id}.png`}
              alt="Car"
            />
          </div>
          <div className="engine-selection">
            <h3>Engine</h3>
            <EngineChoices />
          </div>
        </div>
      </CustomPageLayout>
    </div>
  );
};

const mapStateToProps = ({ custom }) => ({
  custom
});

export default connect(mapStateToProps)(CustomEnginePage);
