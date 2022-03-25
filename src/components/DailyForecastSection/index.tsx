import { useContext } from "react";
import { CityContext } from "../../providers/CityProvider";
import useDailyForecasts from "../../hooks/useDailyForecasts";
import DailyForecastList from "../DailyForecastList";
import { StatusOperation } from "../../@types/apiTypes";
import "./DailyForecastSection.scss";

export default function DailyForecastSection() {
  const { city } = useContext(CityContext);
  const { forecasts, statusForecasts, errorMessageForecasts } =
    useDailyForecasts(city);

  if (!city || !forecasts) {
    return null;
  }

  if (statusForecasts === StatusOperation.PENDING) {
    return (
      <p className="daily-forecasts-section__message daily-forecasts-section__message--info">
        Loading daily forecasts...
      </p>
    );
  }

  if (statusForecasts === StatusOperation.ERROR) {
    return (
      <p className="daily-forecasts-section__message daily-forecasts-section__message--error">
        {errorMessageForecasts}
      </p>
    );
  }

  return (
    <section className="daily-forecasts-section">
      <h2 className="daily-forecasts-section__city">{city?.city_name}</h2>
      <DailyForecastList dailyForecasts={forecasts} />
    </section>
  );
}
