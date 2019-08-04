import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import WheelsChoicesItem from "./WheelsChoicesItem/WheelsChoicesItem";

export const WheelsChoices = ({
  wheels,
  byId,
  setCustomItem,
  changeCustomItem
}) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (wheels.length) {
      setCustomItem(wheels[0]);
      setActive(wheels[0].id);
    }
  }, []);

  const onClick = id => {
    if (active === id) return;
    setActive(id);
    changeCustomItem(byId[id]);
  };

  return (
    <Fragment>
      {wheels.map(wheel => (
        <WheelsChoicesItem
          key={wheel.id}
          active={wheel.id === active}
          onClick={onClick}
          {...wheel}
        />
      ))}
    </Fragment>
  );
};

const mapStateToProps = ({ wheels }) => ({
  wheels: !!wheels.idsArray ? wheels.idsArray.map(id => wheels.byId[id]) : [],
  byId: !!wheels.byId ? wheels.byId : {}
});

const mapDispatchToProps = dispatch => {
  return {
    setCustomItem: (...arg) => dispatch(setCustomItem(...arg)),
    changeCustomItem: (...arg) => dispatch(changeCustomItem(...arg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WheelsChoices);
