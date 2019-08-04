import React from "react";
import { withRouter } from "react-router-dom";
import Page from "../Page/Page";
import SummarizeBar from "./SummarizeBar/SummarizeBar";

export const CustomizationPage = ({ children, page }) => {
  const nextPage = CustomizationPage.mapPage[page.toString()];
  return (
    <div className="CustomizationPage">
      <Page>
        {children}
        <SummarizeBar nextPage={nextPage} />
      </Page>
    </div>
  );
};

CustomizationPage.mapPage = {
  "1": "2",
  "2": "3",
  "3": "final"
};

export default withRouter(CustomizationPage);
