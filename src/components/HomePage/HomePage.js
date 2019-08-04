import React from "react";
import Page from "../Page/Page";
import Hero from "./Hero/Hero";
import SpecBar from "./SpecBar/SpecBar";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Page>
        <Hero />
        <SpecBar />
      </Page>
    </div>
  );
};

export default HomePage;
