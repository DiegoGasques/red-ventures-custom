import { SET_PRICE } from "../action.types.js";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_PRICE:
      return action.payload;
    default:
      return state;
  }
};
