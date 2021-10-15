const searchResponse = {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
};

const wrongSearchResponse = {
  "coord": {
    "lon": "jhbhjb",
    "lat": "jhvgfd"
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
};

const searchQuery = "Mountain";

const googleGeolocationResponse = {
  location: {
      lat: 6.537216,
      lng: 3.3488896
  },
  accuracy: 14006.692371464405
};

const weatherData = {
  "lat": 37.39,
  "lon": -122.08,
  "timezone": "America/Los_Angeles",
  "timezone_offset": -25200,
  "current": {
      "dt": 1633908277,
      "sunrise": 1633875113,
      "sunset": 1633916293,
      "temp": 298.19,
      "feels_like": 297.72,
      "pressure": 1015,
      "humidity": 37,
      "dew_point": 282.5,
      "uvi": 1.99,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 2.68,
      "wind_deg": 17,
      "wind_gust": 4.92,
      "weather": [
          {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
          }
      ]
  },
  "hourly": [
      {
          "dt": 1633824000,
          "temp": 295.15,
          "feels_like": 294.42,
          "pressure": 1019,
          "humidity": 39,
          "dew_point": 280.57,
          "uvi": 0.9,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 107,
          "wind_gust": 1.79,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633827600,
          "temp": 293.8,
          "feels_like": 293.15,
          "pressure": 1019,
          "humidity": 47,
          "dew_point": 282.1,
          "uvi": 0.22,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 75,
          "wind_gust": 1.79,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633831200,
          "temp": 290.91,
          "feels_like": 290.13,
          "pressure": 1019,
          "humidity": 53,
          "dew_point": 281.22,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 337,
          "wind_gust": 1.34,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633834800,
          "temp": 289.17,
          "feels_like": 288.34,
          "pressure": 1019,
          "humidity": 58,
          "dew_point": 280.92,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 84,
          "wind_gust": 0.89,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633838400,
          "temp": 287.94,
          "feels_like": 287.07,
          "pressure": 1020,
          "humidity": 61,
          "dew_point": 280.5,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 52,
          "wind_gust": 0.89,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633842000,
          "temp": 286.6,
          "feels_like": 285.65,
          "pressure": 1020,
          "humidity": 63,
          "dew_point": 279.71,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 178,
          "wind_gust": 1.79,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633845600,
          "temp": 285.7,
          "feels_like": 284.73,
          "pressure": 1020,
          "humidity": 66,
          "dew_point": 279.53,
          "uvi": 0,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 67,
          "wind_gust": 0.89,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633849200,
          "temp": 284.85,
          "feels_like": 283.9,
          "pressure": 1020,
          "humidity": 70,
          "dew_point": 279.57,
          "uvi": 0,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 24,
          "wind_gust": 1.34,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633852800,
          "temp": 284.31,
          "feels_like": 283.34,
          "pressure": 1020,
          "humidity": 71,
          "dew_point": 279.25,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 22,
          "wind_gust": 1.79,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633856400,
          "temp": 284,
          "feels_like": 282.99,
          "pressure": 1019,
          "humidity": 71,
          "dew_point": 278.96,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 1.54,
          "wind_deg": 140,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633860000,
          "temp": 284.31,
          "feels_like": 283.28,
          "pressure": 1019,
          "humidity": 69,
          "dew_point": 278.84,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633863600,
          "temp": 284.32,
          "feels_like": 283.29,
          "pressure": 1019,
          "humidity": 69,
          "dew_point": 278.85,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 173,
          "wind_gust": 2.24,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633867200,
          "temp": 285.17,
          "feels_like": 284.18,
          "pressure": 1019,
          "humidity": 67,
          "dew_point": 279.24,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 328,
          "wind_gust": 0.89,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ]
      },
      {
          "dt": 1633870800,
          "temp": 284.8,
          "feels_like": 283.8,
          "pressure": 1019,
          "humidity": 68,
          "dew_point": 279.1,
          "uvi": 0,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ]
      },
      {
          "dt": 1633874400,
          "temp": 284.3,
          "feels_like": 283.27,
          "pressure": 1019,
          "humidity": 69,
          "dew_point": 278.83,
          "uvi": 0,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
              {
                  "id": 711,
                  "main": "Smoke",
                  "description": "smoke",
                  "icon": "50n"
              }
          ]
      },
      {
          "dt": 1633878000,
          "temp": 284.74,
          "feels_like": 283.81,
          "pressure": 1019,
          "humidity": 71,
          "dew_point": 279.67,
          "uvi": 0,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 30,
          "wind_gust": 1.34,
          "weather": [
              {
                  "id": 721,
                  "main": "Haze",
                  "description": "haze",
                  "icon": "50d"
              }
          ]
      },
      {
          "dt": 1633881600,
          "temp": 288.28,
          "feels_like": 287.39,
          "pressure": 1019,
          "humidity": 59,
          "dew_point": 280.33,
          "uvi": 0.6,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 0,
          "wind_gust": 1.34,
          "weather": [
              {
                  "id": 721,
                  "main": "Haze",
                  "description": "haze",
                  "icon": "50d"
              }
          ]
      },
      {
          "dt": 1633885200,
          "temp": 291.32,
          "feels_like": 290.52,
          "pressure": 1020,
          "humidity": 51,
          "dew_point": 281.03,
          "uvi": 1.65,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 355,
          "wind_gust": 2.24,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633888800,
          "temp": 293.13,
          "feels_like": 292.46,
          "pressure": 1019,
          "humidity": 49,
          "dew_point": 282.11,
          "uvi": 3.02,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.89,
          "wind_deg": 21,
          "wind_gust": 4.02,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633892400,
          "temp": 294.74,
          "feels_like": 294.18,
          "pressure": 1019,
          "humidity": 47,
          "dew_point": 282.96,
          "uvi": 4.06,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 68,
          "wind_gust": 1.79,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633896000,
          "temp": 296.31,
          "feels_like": 295.83,
          "pressure": 1018,
          "humidity": 44,
          "dew_point": 283.4,
          "uvi": 4.62,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 50,
          "wind_gust": 2.24,
          "weather": [
              {
                  "id": 711,
                  "main": "Smoke",
                  "description": "smoke",
                  "icon": "50d"
              }
          ]
      },
      {
          "dt": 1633899600,
          "temp": 297.76,
          "feels_like": 297.35,
          "pressure": 1016,
          "humidity": 41,
          "dew_point": 283.65,
          "uvi": 4.34,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 0.45,
          "wind_deg": 120,
          "wind_gust": 2.24,
          "weather": [
              {
                  "id": 711,
                  "main": "Smoke",
                  "description": "smoke",
                  "icon": "50d"
              }
          ]
      },
      {
          "dt": 1633903200,
          "temp": 298.34,
          "feels_like": 297.88,
          "pressure": 1016,
          "humidity": 37,
          "dew_point": 282.63,
          "uvi": 3.33,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 2.68,
          "wind_deg": 18,
          "wind_gust": 4.47,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      {
          "dt": 1633906800,
          "temp": 298.61,
          "feels_like": 298.13,
          "pressure": 1015,
          "humidity": 35,
          "dew_point": 282.05,
          "uvi": 1.99,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 2.68,
          "wind_deg": 59,
          "wind_gust": 4.47,
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ]
      }
  ]
};

const weatherQuery = (OPEN_WEATHER_API_APPID) => ({
  lat: googleGeolocationResponse.location.lat,
  lon: googleGeolocationResponse.location.lng,
  dt: Math.floor(Date.now() / 1000),
  appid:OPEN_WEATHER_API_APPID
});

const searchData1 = {
  lat: searchResponse.coord.lat,
  lon: searchResponse.coord.lon,
  timezone: searchResponse.name,
  current: {
    dt: searchResponse.dt,
    temp: searchResponse.main.temp,
    feels_like: searchResponse.main.feels_like,
    humidity: searchResponse.main.humidity,
    visibility: searchResponse.visibility,
    wind_speed: searchResponse.wind.speed,
    pressure: searchResponse.main.pressure,
    weather: searchResponse.weather,
  },
}

const searchData = {
  ...searchData1,
  toJSON: () => ({
    ...searchData1
  })
}

export {
  searchResponse,
  searchQuery,
  googleGeolocationResponse,
  weatherQuery,
  weatherData,
  wrongSearchResponse,
  searchData
};