import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import ColorChoicesItem from "./ColorChoicesItem/ColorChoicesItem";
import Select from "../../Select/Select";

export const ColorChoices = ({
  colors,
  byId,
  setCustomItem,
  changeCustomItem,
  onChange
}) => {
  useEffect(() => {
    if (colors.length) {
      setCustomItem(colors[0]);
      onChange(colors[0].id);
    }
    // eslint-disable-next-line
  }, []);

  const onClick = (isActive, id) => {
    if (isActive) return;
    onChange(id);
    changeCustomItem(byId[id]);
  };

  return (
    <Select>
      {colors.map(color => (
        <Select.Option
          key={color.id}
          id={color.id}
          onClick={onClick}
          children={<ColorChoicesItem {...color} />}
        />
      ))}
    </Select>
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
