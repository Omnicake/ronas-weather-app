import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "../../UI/Switch/Switch";
import { RootState } from "../../store";
import { toggleMeasureUnits } from "../../reducers/options";
import "./WeatherUnitToggler.scss";

const availableMeasureUnits = [
  { value: "celsius", label: "C" },
  { value: "fahrenheit", label: "F" },
];

const WeatherUnitToggler: React.FC = () => {
  const measureUnit = useSelector(
    (state: RootState) => state.options.measureUnits
  );
  const dispatch = useDispatch();

  const changeMeasureUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      toggleMeasureUnits(
        e.target.value === "celsius" ? "celsius" : "fahrenheit"
      )
    );
  };

  return (
    <div className="weather-unit-toggler__container">
      <span className="weather-unit-toggler__symbol">°</span>
      <Switch
        items={availableMeasureUnits}
        onChange={changeMeasureUnit}
        currentValue={measureUnit}
      />
    </div>
  );
};

export default WeatherUnitToggler;
