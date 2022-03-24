import { useContext } from "react";
import handleSearchCity from "../../api/places";
import { CityContext } from "../../providers/CityProvider";
import CitySearchForm from "../CitySearchForm";

export default function CitySearchCard() {
  const { cityName } = useContext(CityContext);

  const handleCitySearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchCity({ query: cityName });
  };

  return (
    <article className="search-card">
      <h2 className="search-card__title">Search for a city</h2>
      <CitySearchForm onSearchCity={handleCitySearchForm} />
    </article>
  );
}
