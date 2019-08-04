import { SET_ENGINES } from "../action.types";

export const setEngines = engine => {
  return {
    type: SET_ENGINES,
    payload: engine
  };
};
