import { useContext } from "react";
import { CityContext } from "../../providers/CityProvider";

interface ICitySearchFormProps {
  onSearchCity: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function CitySearchForm({ onSearchCity }: ICitySearchFormProps) {
  const { cityName, setCityName } = useContext(CityContext);

  return (
    <form className="search" onSubmit={onSearchCity}>
      <div className="search__inputgroup">
        <label htmlFor="city" className="search__label">
          City
        </label>
        <input
          type="text"
          id="city"
          className="search__input"
          placeholder="Enter a city name..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
