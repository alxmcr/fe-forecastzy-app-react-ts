import { useContext } from "react";
import { CityContext } from "../../providers/CityProvider";
import useDailyForecasts from "../../hooks/useDailyForecasts";
import DailyForecastList from "../DailyForecastList";
import { StatusOperation } from "../../@types/apiTypes";
import "./DailyForecastSection.scss"

export default function DailyForecastSection() {
  const { city } = useContext(CityContext);
  const { forecasts, statusForecasts, errorMessageForecasts } =
    useDailyForecasts(city);

  if (!city || !forecasts) {
    return null;
  }

  if (statusForecasts === StatusOperation.PENDING) {
    return <div>Loading daily forecasts...</div>;
  }

  if (statusForecasts === StatusOperation.ERROR) {
    return <div>{errorMessageForecasts}</div>;
  }

  return (
    <section className="daily-forecasts">
      <h2 className="daily-forecasts__city">{city?.city_name}</h2>
      <DailyForecastList dailyForecasts={forecasts} />
    </section>
  );
}
