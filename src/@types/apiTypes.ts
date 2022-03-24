import { IDailyForecast, IForecastCurrent, IPlace } from "./appTypes";

export enum StatusOperation {
    PENDING = "pending",
    SUCCESS = "success",
    ERROR = "error",
    IDLE = "idle",
}

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

export interface IForecastsURLParams {
    latitude: number;
    longitude: number;
    units: "metric" | "imperial";
    exclude?: string;
}

export interface IPlacesRequest {
    signal: AbortSignal;
    query: string;
}

export interface IPlacesURLParams {
    query: string;
}
