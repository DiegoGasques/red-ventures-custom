import { SET_ENGINES } from "../action.types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ENGINES:
      return {
        idsArray: payload.items.map(engine => engine.id),
        byId: payload.items.reduce((acc, engine) => {
          acc[engine.id] = engine;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
