import React, { useEffect } from "react";
import { connect } from "react-redux";
import CustomPageLayout from "../CustomPageLayout/CustomPageLayout";
import WheelsChoices from "./WheelsChoices/WheelsChoices";

export const CustomWheelsPage = ({ custom, loaded, history }) => {
  useEffect(() => {
    if (!loaded || custom.length > 3) history.push("/");
  }, [custom]);

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

const mapStateToProps = state => {
  return {
    custom: state.custom,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(CustomWheelsPage);
