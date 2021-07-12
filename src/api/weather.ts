import axios from "axios";
import { WeatherObject } from "../types";
import { weatherAPIAddress } from "../config";

const weatherAPI = {
  getWeatherInfo: (city: string): Promise<WeatherObject> =>
    axios
      .get(weatherAPIAddress, {
        params: {
          q: city,
          appid: process.env.REACT_APP_WEATHER_API_KEY,
          lang: "ru",
        },
      })
      .then((response) => response.data),
};

export default weatherAPI;
