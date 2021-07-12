import React from "react";
import { useSelector } from "react-redux";
import Container from "./layout/Container/Container";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import CityName from "./components/CityName/CityName";
import WeatherUnitToggler from "./components/WeatherUnitToggler/WeatherUnitToggler";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import DetailedWeatherInfo from "./components/DetailedWeatherInfo/DetailedWeatherInfo";
import { RootState } from "./store";

const App: React.FC = () => {
  const iconId = useSelector((state: RootState) => state.weatherInfo.info.icon);

  const getWeatherType = () =>
    iconId === undefined || Number.parseInt(iconId.split("d")[0], 10) <= 9
      ? "GOOD"
      : "BAD";

  return (
    <Container weatherType={getWeatherType()}>
      <Header>
        <CityName />
        <WeatherUnitToggler />
      </Header>
      <Main>
        <WeatherInfo />
      </Main>
      <Footer>
        <DetailedWeatherInfo />
      </Footer>
    </Container>
  );
};

export default App;
