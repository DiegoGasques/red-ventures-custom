import React from "react";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import "./Page.css";

export const Page = ({ children }) => {
  return (
    <div className="Page">
      <Container column={true}>
        <NavBar />
        {children}
      </Container>
    </div>
  );
};

export default Page;
