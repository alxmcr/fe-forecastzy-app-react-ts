import { useContext } from "react";
import { CityContext } from "../../providers/CityProvider";

export default function DailyForecastSection() {
  const { cityName, city } = useContext(CityContext);

  if (cityName === "") {
    return null;
  }

  if (city === undefined || city === null) {
    return (
      <p>
        The '{cityName}' city doesn't exist. I'm so sorry. Please, search other
        city
      </p>
    );
  }

  return (
    <section className="forecasts">
      <h2 className="forecasts__city">{cityName}</h2>
    </section>
  );
}
