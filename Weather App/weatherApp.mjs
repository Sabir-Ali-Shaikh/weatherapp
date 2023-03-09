import * as functions from "./modules/function.mjs";
// functions.getWeatherData("kolkata");

const condition = {
  humidity: 51,
  tempC: 34.8,
  tempF: 89.6,
  uv: 7,
};
const location = {
  city: "kolkata",
  lat: 23,
  long: 29,
};

// functions.addLocation(location, condition);
functions.getLocation()