import { setColors } from "./colors.action";
import { setDefaultPrice } from "./price.action";
import { setEngines } from "./engines.action";
import { setWheels } from "./wheels.action";
import { setLoaded } from "./loaded.action";
import axios from "axios";

export const setInitData = () => {
  return dispatch => {
    axios
      .get("https://next.json-generator.com/api/json/get/41ORKNZDU")
      .then(blob => {
        const data = blob.data.data;
        dispatch(setEngines(data.engine));
        dispatch(setColors(data.color));
        dispatch(setWheels(data.wheels));
        dispatch(setDefaultPrice(data.price));
        dispatch(setLoaded());
      });
  };
};
