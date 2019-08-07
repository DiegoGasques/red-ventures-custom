import React from "react";
import { connect } from "react-redux";
import Page from "../Page/Page";
import { clearCustom } from "../../store/actions/custom.action";
import restartImage from "../../assets/refresh.svg";

export const CustomFinalPage = ({
  clearCustom,
  custom,
  defaultPrice,
  finalPrice,
  history
}) => {
  const handleClick = () => {
    clearCustom();
    history.push("/model-r/custom/1");
  };

  return (
    <div className="CustomFinalPage">
      <Page>
        <div className="main-content">
          <div className="image-container">
            <img src={`/assets/final-${custom[1].id}.png`} alt="Final model" />
          </div>
          <div className="final-model-details">
            <h2>
              Your <span>Model </span>
              <span className="r">R</span>
            </h2>
            <div className="values-table">
              <div className="default-price row">
                <span className="label">Starting Price</span>
                <span className="price">${defaultPrice}</span>
              </div>
              <hr />
              <div className="engine row">
                <span className="label">{`${custom[0].kwh} ${
                  custom[0].type
                } - ${custom[0].kwh} KWh - ${
                  custom[0].range
                } miles range`}</span>
                <span className="price">{`${
                  parseInt(custom[0].price) === 0
                    ? "Included"
                    : "+ $" + custom[0].price
                }`}</span>
              </div>
              <div className="color row">
                <span className="label">{custom[1].label}</span>
                <span className="price">{`${
                  parseInt(custom[1].price) === 0
                    ? "Included"
                    : "+ $" + custom[1].price
                }`}</span>
              </div>
              <div className="wheels row">
                <span className="label">{custom[2].label}</span>
                <span className="price">{`${
                  parseInt(custom[2].price) === 0
                    ? "Included"
                    : "+ $" + custom[2].price
                }`}</span>
              </div>
              <hr />
              <div className="final-price row">
                <span className="label">Final Price</span>
                <span className="price">{`$${finalPrice}`}</span>
              </div>
            </div>
            <button className="restart" onClick={handleClick}>
              Rebuild <img src={restartImage} alt="restart" />
            </button>
          </div>
        </div>
      </Page>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    custom: state.custom,
    defaultPrice: state.defaultPrice,
    finalPrice: state.custom.reduce(
      (acc, item) => (acc += item.price),
      state.defaultPrice
    )
  };
};

export default connect(
  mapStateToProps,
  { clearCustom }
)(CustomFinalPage);
