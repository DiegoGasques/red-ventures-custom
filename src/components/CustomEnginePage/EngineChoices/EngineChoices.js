import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import EngineChoicesItem from "./EngineChoicesItem/EngineChoicesItem";

export const EngineChoices = ({
  engines,
  byId,
  setCustomItem,
  changeCustomItem
}) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (engines.length) {
      setCustomItem(engines[0]);
      setActive(engines[0].id);
    }
  }, []);

  const onClick = id => {
    if (active === id) return;
    setActive(id);
    changeCustomItem(byId[id]);
  };

  return (
    <Fragment>
      {engines.map(engine => (
        <EngineChoicesItem
          key={engine.id}
          active={engine.id === active}
          onClick={onClick}
          {...engine}
        />
      ))}
    </Fragment>
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
