import { SET_CUSTOM, CHANGE_CUSTOM, CLEAR_CUSTOM } from "../action.types";

export const setCustomItem = (item, meta) => {
  return {
    type: SET_CUSTOM,
    payload: item,
    meta
  };
};

export const changeCustomItem = (item, meta) => {
  return {
    type: CHANGE_CUSTOM,
    payload: item,
    meta
  };
};

export const clearCustom = () => ({
  type: CLEAR_CUSTOM
});
