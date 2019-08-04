import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import nextArrow from "../../../assets/next-arrow.svg";
import "./SummarizeBar.css";

export const SummarizeBar = ({ total, items, nextPage, model = "Model R" }) => {
  return (
    <div className="SummarizeBar">
      <Container>
        <div className="info">
          <p className="total-sum">
            Total <div>${total}</div>
          </p>
          <p className="model">{model}</p>
        </div>
        <ul className="customization">
          {!!items[0] && (
            <li className="engine">
              {items[0].kwh} <span>{items[0].type}</span>
            </li>
          )}
          {!!items[1] && (
            <li className="color">
              <img src={`/assets/dot-${items[1].id}.png`} alt="Color dot" />
            </li>
          )}
          {!!items[2] && (
            <li className="wheels">
              <img src={`/assets/wheel-${items[2].id}.png`} alt="wheel" />
            </li>
          )}
        </ul>
        <button className="next-page">
          <Link to={`/model-r/custom/${nextPage}`}>
            next <img src={nextArrow} alt="arrow next page" />
          </Link>
        </button>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ defaultPrice, custom }) => {
  return {
    total: custom.reduce((acc, item) => (acc += item.price), defaultPrice),
    items: custom
  };
};

export default connect(
  mapStateToProps,
  null
)(SummarizeBar);
