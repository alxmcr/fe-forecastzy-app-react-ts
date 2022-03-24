import { useContext } from "react";
import { IPlacesRequest, StatusOperation } from "../../@types/apiTypes";
import handlerCity from "../../api/cities";
import { CityContext } from "../../providers/CityProvider";
import CitySearchForm from "../CitySearchForm";

export default function CitySearchCard() {
  const {
    cityName,
    setCity,
    statusCity,
    setStatusCity,
    errorMessageCity,
    setErrorMessageCity,
  } = useContext(CityContext);

  const handleCitySearchForm = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    let abortController: AbortController | null = null;
    try {
      abortController = new AbortController();
      const request: IPlacesRequest = {
        signal: abortController.signal,
        query: cityName,
      };
      setStatusCity(StatusOperation.PENDING);
      const cityFound = await handlerCity(request);
      setCity(cityFound);
      setStatusCity(StatusOperation.SUCCESS);
    } catch (error) {
      setStatusCity(StatusOperation.ERROR);
      if (error instanceof Error) {
        setErrorMessageCity(error.message);
      }
    } finally {
      if (abortController) {
        abortController.abort();
      }
    }
  };

  return (
    <article className="search-card">
      <h2 className="search-card__title">
        Find out the next forecasts for some city
      </h2>
      <CitySearchForm onSearchCity={handleCitySearchForm} />
      {statusCity === StatusOperation.ERROR ? <p>{errorMessageCity}</p> : null}
    </article>
  );
}
