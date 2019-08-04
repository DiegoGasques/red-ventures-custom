import { combineReducers } from "redux";
import priceReducer from "./price.reducer";
import enginesReducer from "./engines.reducer";
import colorsReducer from "./colors.reducer";
import wheelsReducer from "./wheels.reducer";
import customReducer from "./custom.reducer";
import loadedReducer from "./loaded.reducer";

export default combineReducers({
  loaded: loadedReducer,
  defaultPrice: priceReducer,
  custom: customReducer,
  engine: enginesReducer,
  color: colorsReducer,
  wheels: wheelsReducer
});
