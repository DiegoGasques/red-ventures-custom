import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import WheelsChoicesItem from "./WheelsChoicesItem/WheelsChoicesItem";
import Select from "../../Select/Select";

export const WheelsChoices = ({
  wheels,
  byId,
  setCustomItem,
  changeCustomItem
}) => {
  useEffect(() => {
    if (wheels.length) {
      setCustomItem(wheels[0]);
    }
    // eslint-disable-next-line
  }, []);

  const onClick = (isActive, id) => {
    if (isActive) return;
    changeCustomItem(byId[id]);
  };

  return (
    <Select>
      {wheels.map(wheel => (
        <Select.Option
          key={wheel.id}
          id={wheel.id}
          onClick={onClick}
          children={<WheelsChoicesItem {...wheel} />}
        />
      ))}
    </Select>
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
