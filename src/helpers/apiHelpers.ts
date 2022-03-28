import { IForecastsURLParams, IPlacesURLParams } from "../@types/apiTypes";
import { IDailyForecast, IPlace } from "../@types/appTypes";
import { appConfig } from "../config";

export const generateURLForecasts = ({ latitude = 0, longitude = 0, units = "metric", exclude = "hourly,minutely,alerts" }: IForecastsURLParams): string => {
    const apiKeyOpenWeather = appConfig?.API_KEY_OPEN_WEATHER_MAP;
    let url = new URL(appConfig?.ENDPOINT_OPEN_WEATHER_MAP_ONE_CALL_API);

    let searchParams = new URLSearchParams();

    if (latitude !== null && latitude !== undefined) {
        searchParams.append("lat", latitude.toString())
    }

    if (longitude !== null && longitude !== undefined) {
        searchParams.append("lon", longitude.toString())
    }

    if (units !== null && units !== undefined) {
        searchParams.append("units", units)
    }

    if (exclude !== null && exclude !== undefined) {
        searchParams.append("exclude", exclude)
    }

    if (apiKeyOpenWeather !== null && apiKeyOpenWeather !== undefined) {
        searchParams.append("appid", apiKeyOpenWeather)
    }

    url.search = searchParams.toString();

    return url.toString();
}

export const generateURLPlaces = ({ query = "" }: IPlacesURLParams): string => {
    let url = new URL(appConfig?.ENDPOINT_PLACES_API);

    let searchParams = new URLSearchParams();

    if (query !== null && query !== undefined) {
        searchParams.append("q", query)
    }

    url.search = searchParams.toString();

    return url.toString();
}

export const firstPlaceAsType = ({ places = [], type = "" }: { places: IPlace[], type: string }): IPlace | undefined => {
    return places.find(place => place.result_type === type);
}

export const getDTWithMaxHumitidy = (forecasts: IDailyForecast[] = []): number => {
    let maxHumidity = 0;
    let dtMaxHumidity = 0;

    forecasts.forEach(forecast => {
        if (forecast.humidity > maxHumidity) {
            maxHumidity = forecast.humidity;
            dtMaxHumidity = forecast.dt;
        }
    })

    return dtMaxHumidity;
}