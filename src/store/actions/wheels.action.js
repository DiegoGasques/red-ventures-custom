import { SET_WHEELS } from "../action.types";

export const setWheels = wheels => {
  return {
    type: SET_WHEELS,
    payload: wheels
  };
};
