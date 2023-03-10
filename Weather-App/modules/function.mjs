import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
// console.log(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname);

function readFiled() {
  try {
    const content = fs.readFileSync(
      path.join(__dirname, "weatherData.txt"),
      "utf8"
    );
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
  }
}

function writeFile(data) {
  fs.writeFileSync(
    path.join(__dirname, "weatherData.txt"),
    JSON.stringify(data)
  );
}

export function getWeatherData(location) {
  const WeatherDB = readFiled();
  let result = WeatherDB.find(
    (obj) => obj.location.city.toLowerCase() == location.toLowerCase()
  );
  console.log(result);
  return result;
}

export function addLocation(location, condition) {
  const WeatherDB = readFiled();
  let index = WeatherDB.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.city.toLowerCase()
  );
  if (index > -1) {
    console.log("City Already Exist Cannot Add");
  } else {
    WeatherDB.push({ location, condition });
    writeFile(WeatherDB);
    console.log(WeatherDB);
  }
}

export function updateLocation(location, item) {
  const WeatherDB = readFiled();
  let index = WeatherDB.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.toLowerCase()
  );
  if (index > -1) {
    WeatherDB.splice(index, 1, item);
    writeFile(WeatherDB);
    console.log(WeatherDB);
  } else {
    console.log("Requried Data Doesn't Exist to Update");
  }
}

export function removeLocation(location) {
  const WeatherDB = readFiled();
  let index = WeatherDB.findIndex(
    (obj) => obj.location.city.toLowerCase() == location.toLowerCase()
  );
  if (index > -1) {
    WeatherDB.splice(index, 1);
    console.log(WeatherDB.splice(index, 1));
    writeFile(WeatherDB);
    // console.log(WeatherDB);
  } else {
    console.log("Nothing to Delete");
  }
}

export function getLocation() {
  let citylocation = [];
  WeatherDB.forEach((obj) => {
    citylocation.push(obj.location.city);
  });
  console.log(citylocation);
  return citylocation;
}
