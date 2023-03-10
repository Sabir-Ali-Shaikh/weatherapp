import * as functions from "./modules/function.mjs";
import fs from "fs";
import path from "path";
import { WeatherData } from "./modules/weatherData.mjs";

let location = {
  city: "patna",
  lat: 23,
  long: 29,
};

let condition = {
  humidity: 51,
  tempC: 34.8,
  tempF: 89.6,
  uv: 7,
};

let item = {
  location: {
    city: "patna",
    lat: 22,
    long: 34,
  },

  condition: {
    humidity: 62,
    tempC: 27,
    tempF: 80.6,
    uv: 8,
  },
};

functions.getWeatherData("kolkata");
// functions.addLocation(location, condition);
// functions.removeLocation("patna")
// functions.updateLocation("patna", item);

// const notes = "./modules/weatherData.txt";
// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// // notes.txt
// console.log(path.extname(notes));

// for myself

// fs.writeFile("./modules/weatherData.txt", WeatherData.toString(), (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

// fs.writeFile(
//   "./modules/weatherData.txt",
//   JSON.stringify(WeatherData),
//   (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   }
// );

// let dataPath = './modules/weatherData.txt"';
// path.dirname(dataPath);

// path.basename(dataPath);
// path.extname(dataPath);

// console.log(readFile());
