import { IDailyForecast, IForecastCurrent } from "./appTypes";

export interface IForecastsRequest {
    signal: AbortSignal;
    latitude: number;
    longitude: number;
    units: "metric" | "imperial"; // metric = Celsius, imperial = Fahrenheit
    exclude?: string;
}

export interface IForecastsResponse {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
    current: IForecastCurrent
    daily: IDailyForecast[]
}