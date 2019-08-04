import React, { useState, useEffect, createContext, useContext } from "react";
import { connect } from "react-redux";
import {
  setCustomItem,
  changeCustomItem
} from "../../../store/actions/custom.action";
import EngineChoicesItem from "./EngineChoicesItem/EngineChoicesItem";

const SelectContext = createContext({});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("You cannot use options outside a select component!");
  }
  return context;
};

const Select = ({ children }) => {
  const [active, setActive] = useState(null);
  let trackId = 1;
  return (
    <SelectContext.Provider value={{ setActive, active }}>
      {React.Children.map(children, Child => {
        const ClonedChild = React.cloneElement(Child, { trackId });
        trackId += 1;
        return ClonedChild;
      })}
    </SelectContext.Provider>
  );
};

const Option = ({ children, trackId, id, onClick }) => {
  const { active, setActive } = useSelectContext();
  useEffect(() => {
    if (trackId === 1) setActive(id);
  }, []);
  const handleClick = () => {
    console.log("Clicked");
    onClick(active === id, id);
    setActive(id);
  };
  return React.Children.map(children, Child =>
    React.cloneElement(Child, {
      className: Child.props.className + `${active === id ? " active" : ""}`,
      onClick: handleClick
    })
  );
};

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
  }, []);

  const onClick = (isActive, id) => {
    if (isActive) return;
    changeCustomItem(byId[id]);
  };

  return (
    <Select>
      {engines.map(engine => (
        <Option
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
