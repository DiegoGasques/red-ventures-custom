import { SET_COLORS } from "../action.types";

export const setColors = colors => {
  return {
    type: SET_COLORS,
    payload: colors
  };
};
