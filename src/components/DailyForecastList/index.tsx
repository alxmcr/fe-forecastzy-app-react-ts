import { IDailyForecast } from "../../@types/appTypes";
import DailyForecastCard from "../DailyForecastCard";
import "./DailyForecastList.scss";

interface IDailyForecastListProps {
  dailyForecasts: IDailyForecast[];
}

export default function DailyForecastList({
  dailyForecasts = [],
}: IDailyForecastListProps) {
  if (dailyForecasts.length === 0) {
    return (
      <p className="daily-forecasts__message daily-forecasts__message--error">
        There were daily forecasts results. Please, try again with another city.
      </p>
    );
  }

  return (
    <div className="daily-forecasts__list">
      {dailyForecasts.map((dailyForecast) => (
        <DailyForecastCard
          key={dailyForecast.dt}
          dailyForecast={dailyForecast}
        />
      ))}
    </div>
  );
}
