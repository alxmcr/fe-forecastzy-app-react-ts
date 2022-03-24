import { IDailyForecast } from "../../@types/appTypes";
import { formatDataPoint } from "../../helpers/appHelpers";

interface IDailyForecastCardProps {
  dailyForecast: IDailyForecast;
}

export default function DailyForecastCard({
  dailyForecast,
}: IDailyForecastCardProps) {
  return (
    <article className="forecast">
      <h3>{formatDataPoint(dailyForecast?.dt)}</h3>
      <ul className="forecast__temperatures">
        <li className="forecast__temperature">
          <span className="forecast__temperature-value">
            {dailyForecast.temp.min} °C
          </span>
          <span className="forecast__temperature-label">Min</span>
        </li>
        <li className="forecast__temperature">
          <span className="forecast__temperature-value">
            {dailyForecast.temp.max} °C
          </span>
          <span className="forecast__temperature-label">Max</span>
        </li>
      </ul>
    </article>
  );
}
