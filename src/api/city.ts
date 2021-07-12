import axios from "axios";
import { LocationObject } from "../types";
import { locationAPIAddress } from "../config";

const cityAPI = {
  getCityInfo: (lat: number, lon: number): Promise<LocationObject> =>
    axios
      .get(locationAPIAddress, {
        params: {
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          lat,
          lon,
          format: "json",
          "accept-language": "ru",
        },
      })
      .then((response) => response.data),
};

export default cityAPI;
