import { WeatherData } from "./weatherData.mjs";

export function getWeatherData(location) {
  const result = WeatherData.filter(
    (obj) => obj.location.city.toLowerCase() === location.toLowerCase()
  );
  console.log(result);
  return result;
}

export function addLocation(location, condition) {
  let index = WeatherData.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.city.toLowerCase()
  );
  if (index > -1) {
    console.log("City Already Exist Cannot Add");
  } else {
    WeatherData.push(location, condition);
    console.log(WeatherData);
  }
}

export function updateLocation(location, item) {
  let index = WeatherData.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.toLowerCase()
  );
  if (index > -1) {
    WeatherData.splice(index, 1, item);
  } else {
    console.log("Requried Data Doesn't Exist to Update");
  }
}

export function removeLocation(location, condition) {
  let index = WeatherData.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.city.toLowerCase()
  );
  if (index > -1) {
    WeatherData.splice(index, 1);
  } else {
    console.log("Nothing to Delete");
  }
}

export function getLocation() {
  let citylocation = [];
  WeatherData.forEach((obj) => {
    citylocation.push(obj.location.city);
  });
  console.log(citylocation);
  return citylocation;
}
