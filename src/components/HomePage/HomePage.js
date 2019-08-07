import React, { useEffect } from "react";
import { connect } from "react-redux";
import Page from "../Page/Page";
import Hero from "./Hero/Hero";
import SpecBar from "./SpecBar/SpecBar";
import { clearCustom } from "../../store/actions/custom.action";
import { setInitData } from "../../store/actions/shared.action";

export const HomePage = ({ loaded, dispatch }) => {
  useEffect(() => {
    if (loaded) {
      dispatch(clearCustom());
    } else {
      dispatch(setInitData());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="HomePage">
      <Page>
        <Hero />
        <SpecBar />
      </Page>
    </div>
  );
};

export default connect(
  ({ loaded }) => ({ loaded }),
  null
)(HomePage);
