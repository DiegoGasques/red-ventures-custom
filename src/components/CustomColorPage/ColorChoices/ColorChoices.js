import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import ColorChoicesItem from "./ColorChoicesItem/ColorChoicesItem";

export const ColorChoices = ({
  colors,
  byId,
  setCustomItem,
  changeCustomItem,
  onChange
}) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (colors.length) {
      setCustomItem(colors[0]);
      setActive(colors[0].id);
      onChange(colors[0].id);
    }
  }, []);

  const onClick = id => {
    if (active === id) return;
    setActive(id);
    onChange(id);
    changeCustomItem(byId[id]);
  };

  return (
    <Fragment>
      {colors.map(color => (
        <ColorChoicesItem
          key={color.id}
          active={color.id === active}
          onClick={onClick}
          {...color}
        />
      ))}
    </Fragment>
  );
};

const mapStateToProps = ({ color }) => ({
  colors: !!color.idsArray ? color.idsArray.map(id => color.byId[id]) : [],
  byId: !!color.byId ? color.byId : {}
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
)(ColorChoices);
