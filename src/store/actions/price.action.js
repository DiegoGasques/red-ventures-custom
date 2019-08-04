import { SET_PRICE } from "../action.types";

export const setDefaultPrice = price => {
  return {
    type: SET_PRICE,
    payload: price
  };
};
