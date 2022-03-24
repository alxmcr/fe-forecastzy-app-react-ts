import { useContext } from "react";
import { StatusOperation } from "../../@types/apiTypes";
import { CityContext } from "../../providers/CityProvider";

interface ICitySearchFormProps {
  onSearchCity: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function CitySearchForm({ onSearchCity }: ICitySearchFormProps) {
  const { setCity, cityName, setCityName, setStatusCity, setErrorMessageCity } =
    useContext(CityContext);

  const handlerCityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityName(event.target.value);
    setCity(undefined);
    setStatusCity(StatusOperation.IDLE);
    setErrorMessageCity("");
  };

  return (
    <form className="search" onSubmit={onSearchCity}>
      <div className="search__inputgroup">
        <label htmlFor="city" className="search__label">
          City
        </label>
        <input
          type="search"
          id="city"
          className="search__input"
          placeholder="Enter a city name..."
          value={cityName}
          onChange={handlerCityNameChange}
          required
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
