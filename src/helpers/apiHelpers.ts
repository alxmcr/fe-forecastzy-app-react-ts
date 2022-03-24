import { IForecastsURLParams } from "../@types/apiTypes";
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