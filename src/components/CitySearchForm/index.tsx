import { useContext } from "react";
import { StatusOperation } from "../../@types/apiTypes";
import { CityContext } from "../../providers/CityProvider";
import "./CitySearchForm.scss";

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
    <form className="search-form" onSubmit={onSearchCity} autoComplete="off">
      <div className="search-form__inputgroup">
        <label htmlFor="city" className="search-form__label">
          City
        </label>
        <input
          type="search"
          id="city"
          className="search-form__input"
          placeholder="Enter a city name..."
          value={cityName}
          onChange={handlerCityNameChange}
          required
        />
      </div>
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}
