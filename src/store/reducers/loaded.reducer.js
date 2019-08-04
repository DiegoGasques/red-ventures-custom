import { SET_LOADED } from "../action.types";

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOADED:
      return true;
    default:
      return state;
  }
};
