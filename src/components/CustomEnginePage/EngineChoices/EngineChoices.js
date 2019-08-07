import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import EngineChoicesItem from "./EngineChoicesItem/EngineChoicesItem";
import Select from "../../Select/Select";

export const EngineChoices = ({
  engines,
  byId,
  setCustomItem,
  changeCustomItem
}) => {
  useEffect(() => {
    if (engines.length) {
      setCustomItem(engines[0]);
    }
    // eslint-disable-next-line
  }, []);

  const onClick = (isActive, id) => {
    if (isActive) return;
    changeCustomItem(byId[id]);
  };

  return (
    <Select>
      {engines.map(engine => (
        <Select.Option
          key={engine.id}
          id={engine.id}
          onClick={onClick}
          children={<EngineChoicesItem {...engine} />}
        />
      ))}
    </Select>
  );
};

const mapStateToProps = ({ engine }) => ({
  engines: !!engine.idsArray ? engine.idsArray.map(id => engine.byId[id]) : [],
  byId: !!engine.byId ? engine.byId : {}
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
)(EngineChoices);
