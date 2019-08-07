import React, { useState, useEffect, createContext, useContext } from "react";

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
    // eslint-disable-next-line
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

Select.Option = Option;

export default Select;
