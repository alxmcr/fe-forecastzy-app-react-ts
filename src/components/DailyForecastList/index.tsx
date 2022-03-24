import { IDailyForecast } from "../../@types/appTypes";
import DailyForecastCard from "../DailyForecastCard";

interface IDailyForecastListProps {
  dailyForecasts: IDailyForecast[];
}

export default function DailyForecastList({
  dailyForecasts = [],
}: IDailyForecastListProps) {
  if (dailyForecasts.length === 0) {
    return <p>No daily forecasts</p>;
  }

  return (
    <div className="daily-forecasts">
      {dailyForecasts.map((dailyForecast) => (
        <DailyForecastCard
          key={dailyForecast.dt}
          dailyForecast={dailyForecast}
        />
      ))}
    </div>
  );
}
