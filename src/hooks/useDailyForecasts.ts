import { useEffect, useState } from "react";
import { IForecastsResponse, StatusOperation } from "../@types/apiTypes";
import { IDailyForecast, IPlace } from "../@types/appTypes";
import handlerForecasts from "../api/forecasts";

export default function useDailyForecasts(place: IPlace | null | undefined) {
    const [forecasts, setForecasts] = useState<IDailyForecast[]>([]);
    const [statusForecasts, setStatusForecasts] = useState<StatusOperation>(StatusOperation.IDLE);
    const [errorMessageForecasts, setErrorMessageForecasts] = useState<string>("");

    useEffect(() => {
        let abortController: AbortController | null = null;

        const fetchData = async (place: IPlace) => {
            setStatusForecasts(StatusOperation.PENDING);
            setErrorMessageForecasts("");

            try {
                abortController = new AbortController();
                const response: IForecastsResponse = await handlerForecasts({
                    signal: abortController.signal,
                    latitude: Number(place.lat),
                    longitude: Number(place.long),
                    units: "metric",
                    exclude: "hourly,minutely,alerts",
                });

                setForecasts(response.daily);
                setStatusForecasts(StatusOperation.SUCCESS);
            } catch (error) {
                setStatusForecasts(StatusOperation.ERROR);
                if (error instanceof Error) {
                    setErrorMessageForecasts(error.message);
                }
            } finally {
                setStatusForecasts(StatusOperation.IDLE);
            }
        };

        if (place !== undefined && place !== null) {
            fetchData(place);
        }

        return () => {
            if (abortController !== null) {
                abortController.abort();
            }
        };
    }, [place]);

    return { forecasts, statusForecasts, errorMessageForecasts };
}