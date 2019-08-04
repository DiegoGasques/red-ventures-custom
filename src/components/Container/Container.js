import React from "react";
import "./Container.css";

export const Container = ({ children, column }) => {
  return <div className={`Container ${column && "column"}`}>{children}</div>;
};

export default Container;
