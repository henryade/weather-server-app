import express, { urlencoded, json } from "express";
import { config } from "dotenv";
import {Weather} from "./model";
import axios from "axios";
import "./db";
import cors from "cors";


config();

const { PORT, OPEN_WEATHER_API_APPID, GOOGLE_GEOLOCATION_API_KEY } = process.env || { PORT: 3000 }; 
const app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

/**
 * @description Home route API
 * @param  {req} request
 * @param  {res} response
 * @returns  {JSON} { message }
 */
app.get("/", (req, res) => res.status(200).json({ message: "Home Route" }));

/**
 * @description Search history route which returns a list all search perform on the api
 * @param  {req} request
 * @param  {res} response
 * @returns  {JSON} {message, data}
 */
app.get("/searchHistory", async(req, res) => {
  const data = await Weather.find({ $orderby: { updatedAt: -1 } });
  return res.status(200).json({ message: "data retrieved successfully", data })
});

/**
 * @description Search route which returns weather details of the search parameter
 * @param  {req} request
 * @param  {res} response
 * @returns  {JSON} {message, data, record} | { message, error}
 */
app.post("/search", async(req, res) => {
  try {
    const now = Math.floor(Date.now() / 1000); //get unix timestamp
    const query = req.query.searchQuery;
    // check if there is a search parameter
    if(!query) {
      return res.status(400).json({ message: "search query missing", data: null });
    }
    // get weather information for openwether api
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${OPEN_WEATHER_API_APPID}`);
    // check if data is returned
    if( !data || Object.values(data) <= 1) {
      return res.status(400).json({ message: "failed to get weather data", data: null  });
    }
    const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&dt=${now}&appid=${OPEN_WEATHER_API_APPID}`);
    // check data
    if(!weatherData.data || Object.values(weatherData.data) <= 1) {
      return res.status(400).json({ message: "failed to get weather data", data: null });
    }
    const WeatherResponseMapping = {
      lat: data.coord.lat,
      lon: data.coord.lon,
      timezone: data.name,
      current: {
        dt: data.dt,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        visibility: data.visibility,
        wind_speed: data.wind.speed,
        pressure: data.main.pressure,
        weather: data.weather,
      },
      hourly: weatherData.data.hourly
    }
    // check if request exists, it updates the date
    const response = await Weather.findOneAndUpdate({ timezone: data.name }, { $set: { updatedAt: new Date(), hourly: weatherData.data.hourly }}, {new: true});
    if(response) {
      return res.status(200).json({ message: "search returned successfully", data: response, record: "updated" });
    }
    // save data
    const doc = await Weather.create(WeatherResponseMapping);
    return res.status(200).json({ message: "search returned successfully", data: doc.toJSON(), record: "new" });
  } catch (error) {
    // In a production ready application, this will be written to a file instead of sending to the frontend
    return res.status(500).json({ message: "error fetching weather data", error: error.response?.data || error.message || error });
  }
});

/**
 * @description Weather route which returns the weather details of your current location
 * @param  {req} request
 * @param  {res} response
 * @returns  {JSON} {message, data}
 */
app.get("/weather", async(req, res) => {
  const now = Math.floor(Date.now() / 1000); //get unix timestamp
  // get longitude and latitude from google api
  const { data } = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_GEOLOCATION_API_KEY}`);
  const { lat, lng } = data.location || {};
  // check data from api
  if(!lat || !lng) {
    return res.status(400).json({ message: "failed to get latitude and longitude", data: null });
  }
  // get weather data from openweather api
  const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lng}&units=metric&dt=${now}&appid=${OPEN_WEATHER_API_APPID}`);
  // check data
  if(!weatherData.data || Object.values(weatherData.data) <= 1) {
    return res.status(400).json({ message: "failed to get weather data", data: null });
  }
  return res.status(200).json({ message: "data fetched successfully", data: weatherData.data });
});

/**
 * @description catch all request to the api that isnt amongst allowed requests
 * @param  {req} request
 * @param  {res} response
 * @returns  {JSON} {message}
 */
app.get("*", (req, res) => res.status(404).json({ message: "Route Not Found" }));

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

export default app;