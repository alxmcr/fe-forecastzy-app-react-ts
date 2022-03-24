export interface IDailyForecast {
    dt: number,
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    temp: {
        day: number,
        min: number,
        max: number,
        night: number,
        eve: number,
        morn: number,
    },
    feels_like: {
        day: number,
        night: number,
        eve: number,
        morn: number,
    },
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: IForecastWeather[],
    clouds: number
    pop: number
    uvi: number
}

export interface IForecastWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IPlace {
    id: number,
    slug: string,
    city_slug: string,
    display: string,
    ascii_display: string,
    city_name: string,
    city_ascii_name: string,
    state: string,
    country: string,
    lat: string,
    long: string,
    result_type: string,
    popularity: string,
    sort_criteria: number
}