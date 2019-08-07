import { SET_CUSTOM, CHANGE_CUSTOM, CLEAR_CUSTOM } from "../action.types.js";

export default (state = [], action) => {
  switch (action.type) {
    case SET_CUSTOM:
      return [...state, action.payload];
    case CHANGE_CUSTOM:
      return [...state.slice(0, -1), action.payload];
    case CLEAR_CUSTOM:
      return [];
    default:
      return state;
  }
};
