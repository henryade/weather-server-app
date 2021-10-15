import { Schema, model} from "mongoose";

const subWeather = new Schema({
  dt: Number,
  temp: Number,
  feels_like: Number,
  humidity: Number,
  uvi: Number,
  visibility: Number,
  wind_speed: Number,
  pressure: Number,
  weather: [{
    id: Number,
    main: String,
    description: String,
    icon: String,
  }],
});

const weatherSchema = new Schema({
  lat: Number,
  lon: Number,
  timezone: String,
  current: subWeather,
  hourly: [subWeather]
 }, { timestamps: true });

 weatherSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = {
  Weather: model("Weather", weatherSchema),
};