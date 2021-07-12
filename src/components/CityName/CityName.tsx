import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import { ReactComponent as LocationIcon } from "../../assets/LocationIcon.svg";
import { RootState } from "../../store";
import Input from "../../UI/Input/Input";
import "./CityName.scss";
import { setCityName } from "../../reducers/city";
import { capitalizeAllWords } from "../../utils";
import { fetchWeatherData, setError } from "../../reducers/weather";
import cityAPI from "../../api/city";

const CityName: React.FC = () => {
  const [isInputActive, setInputActive] = useState<boolean>(false);

  const cityName = useSelector((state: RootState) => state.city.name);
  const toggleInputStatus = () => setInputActive(!isInputActive);
  const dispatch = useDispatch();

  const onConfirmClick = async () => {
    setInputActive(false);
    await dispatch(fetchWeatherData(cityName || ""));
  };

  const onGeolocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (value) => {
        const res = await cityAPI.getCityInfo(
          value.coords.latitude,
          value.coords.longitude
        );
        const { city } = res.address;
        dispatch(setCityName(city));
        await dispatch(fetchWeatherData(city));
      });
    } else {
      dispatch(setError("Браузер не поддерживает геолокацию"));
    }
  };

  const onInputBlur = async () => {
    setInputActive(false);
    await dispatch(fetchWeatherData(cityName || ""));
  };

  return isInputActive ? (
    <Input
      onBlur={onInputBlur}
      autoFocus
      confirmDisabled={cityName.length === 0}
      onConfirmClick={onConfirmClick}
      value={cityName}
      placeholder="Введите название города"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setCityName(e.target.value))
      }
    />
  ) : (
    <div>
      <h2 className="city-name__title">
        {cityName ? capitalizeAllWords(cityName) : "Выберите город"}
      </h2>
      <div className="city-name__container">
        <Button label="Сменить город" onClick={toggleInputStatus} />
        <Button
          label="Моё местополжение"
          icon={<LocationIcon />}
          onClick={onGeolocationClick}
        />
      </div>
    </div>
  );
};

export default CityName;
