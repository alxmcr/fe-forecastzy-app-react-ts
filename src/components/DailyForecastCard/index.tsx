import { IDailyForecast } from "../../@types/appTypes";
import { formatDataPoint } from "../../helpers/appHelpers";
import "./DailyForecastCard.scss";

interface IDailyForecastCardProps {
  dailyForecast: IDailyForecast;
  isMaxHumidity: boolean;
}

export default function DailyForecastCard({
  dailyForecast,
  isMaxHumidity = false,
}: IDailyForecastCardProps) {
  return (
    <article className="forecast">
      <h3>{formatDataPoint(dailyForecast?.dt)}</h3>
      <ul className="forecast__temperatures">
        <li className="forecast__temperature">
          <span className="forecast__value">{dailyForecast.temp.min} °C</span>
          <span className="forecast__label">Min</span>
        </li>
        <li className="forecast__temperature">
          <span className="forecast__value">{dailyForecast.temp.max} °C</span>
          <span className="forecast__label">Max</span>
        </li>
        <li
          className={
            isMaxHumidity
              ? "forecast__humidity forecast__humidity--max"
              : "forecast__humidity"
          }
        >
          <span className="forecast__value">{dailyForecast.humidity} %</span>
          <span className="forecast__label">Humidity</span>
        </li>
      </ul>
    </article>
  );
}
