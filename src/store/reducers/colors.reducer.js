import { SET_COLORS } from "../action.types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_COLORS:
      return {
        idsArray: payload.items.map(color => color.id),
        description: payload.description,
        byId: payload.items.reduce((acc, color) => {
          acc[color.id] = color;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
