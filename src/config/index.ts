export interface IAppConfig {
    API_KEY_OPEN_WEATHER_MAP: string;
    ENDPOINT_OPEN_WEATHER_MAP_ONE_CALL_API: string;
    ENDPOINT_PLACES_API: string;
}

export const appConfig: IAppConfig = {
    API_KEY_OPEN_WEATHER_MAP: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY || "fake-api-key",
    ENDPOINT_OPEN_WEATHER_MAP_ONE_CALL_API: "https://api.openweathermap.org/data/2.5/onecall",
    ENDPOINT_PLACES_API: "https://search.reservamos.mx/api/v2/places",
}