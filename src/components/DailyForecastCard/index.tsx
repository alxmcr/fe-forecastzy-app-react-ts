import { IDailyForecast } from "../../@types/appTypes";

interface IDailyForecastCardProps {
  dailyForecast: IDailyForecast;
}

export default function DailyForecastCard({
  dailyForecast,
}: IDailyForecastCardProps) {
  return (
    <article className="forecast">
      <h3>{dailyForecast.dt}</h3>
      <ul className="forecast__temperatures">
        <li className="forecast__temperature">
          <span className="forecast__temperature-label">Min</span>
          <span className="forecast__temperature-value">
            {dailyForecast.temp.min}
          </span>
        </li>
        <li className="forecast__temperature">
          <span className="forecast__temperature-label">Max</span>
          <span className="forecast__temperature-value">
            {dailyForecast.temp.max}
          </span>
        </li>
      </ul>
    </article>
  );
}
