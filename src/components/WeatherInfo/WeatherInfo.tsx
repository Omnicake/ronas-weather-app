import React from "react";
import {useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import {RootState} from "../../store";
import "./WeatherInfo.scss";
import {convertKelvinToCelcius, convertKelvinToFahrenheit} from "../../utils";
import LoaderSpinner from "../../UI/Loader/Loader";
import {weatherIconAPIAddress} from "../../config";

const WeatherInfo: React.FC = () => {
    const weatherInfo = useSelector(((state: RootState) => state.weatherInfo));
    const {temp, icon, description} = weatherInfo.info;
    const {status, error} = weatherInfo;
    const measureUnit = useSelector((state: RootState) => state.options.measureUnits);

    // Convert Kelvin to Fahrenheit or Celsius with round to 1 decimal
    const convertTemperature = (temperature: number): string => {
        switch (measureUnit) {
            case "celsius": {
                return convertKelvinToCelcius(temperature);
            }
            case "fahrenheit": {
                return convertKelvinToFahrenheit(temperature);
            }
            default: {
                return temperature.toString();
            }
        }
    }

    const displayedTemperature = temp ? convertTemperature(temp) : "--";

    return <div className="weather-info__container">
        <AnimatePresence>
            {status === "loading" ? <LoaderSpinner/> : <>
                <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="weather-info__value">
                    {icon ?
                        <img className="weather-info__icon" src={`${weatherIconAPIAddress}${icon}@4x.png`}
                             alt="Weather icon"/> : null}
                    <h1>{displayedTemperature} °</h1>
                </motion.div>
                <span className="weather-info__type">{description || "Нет информации"}</span></>}
            {status === "rejected" && <motion.div initial={{opacity: 0}}
                                                  animate={{opacity: 1}}
                                                  exit={{opacity: 0}}
                                                  className="weather-info__error">{error}</motion.div>}
        </AnimatePresence>
    </div>
}

export default WeatherInfo;
