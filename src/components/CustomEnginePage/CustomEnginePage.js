import React, { useEffect } from "react";
import { connect } from "react-redux";
import CustomPageLayout from "../CustomPageLayout/CustomPageLayout";
import EngineChoices from "./EngineChoices/EngineChoices";
import "./CustomEnginePage.css";

export const CustomEnginePage = ({ custom, loaded, history }) => {
  useEffect(() => {
    if (!loaded || custom.length > 1) history.push("/");
  }, []);

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

const mapStateToProps = state => {
  return {
    byId: state.engine.byId,
    custom: state.custom,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(CustomEnginePage);
