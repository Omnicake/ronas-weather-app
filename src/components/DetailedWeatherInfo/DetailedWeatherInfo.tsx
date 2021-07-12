import React from "react";
import { useSelector } from "react-redux";
import ValueDisplay from "../ValueDisplay/ValueDisplay";
import { RootState } from "../../store";
import {
  convertHPAtoMM,
  formatEmptyValue,
  getCardinalDirection,
} from "../../utils";

const DetailedWeatherInfo: React.FC = () => {
  const weatherInfo = useSelector((state: RootState) => state.weatherInfo);

  const { wind, pressure, humidity, rainChance } = weatherInfo.info;

  const weatherValues: Array<{ label: string; value?: string }> = [
    {
      label: "Ветер",
      value: `${formatEmptyValue(wind?.speed)} м/с, ${
        wind?.deg ? getCardinalDirection(wind.deg) : ""
      }`,
    },
    {
      label: "Давление",
      value: `${pressure ? convertHPAtoMM(pressure) : "--"} мм. рт. ст.`,
    },
    {
      label: "Влажность",
      value: `${formatEmptyValue(humidity)}%`,
    },
    {
      label: "Вероятность дождя",
      value: `${formatEmptyValue(rainChance)}%`,
    },
  ];

  return (
    <>
      {weatherValues.map((weatherValue) => (
        <ValueDisplay
          key={weatherValue.label}
          label={weatherValue.label}
          value={weatherValue.value}
        />
      ))}
    </>
  );
};

export default DetailedWeatherInfo;
