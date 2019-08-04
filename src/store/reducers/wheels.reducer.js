import { SET_WHEELS } from "../action.types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_WHEELS:
      return {
        idsArray: payload.items.map(wheel => wheel.id),
        byId: payload.items.reduce((acc, wheel) => {
          acc[wheel.id] = wheel;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
