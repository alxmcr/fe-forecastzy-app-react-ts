import { useEffect, useState } from "react";
import { IForecastsResponse, StatusOperation } from "../@types/apiTypes";
import { IDailyForecast, IUseForecastsParams } from "../@types/appTypes";
import handlerForecasts from "../api/forecasts";

export default function useDailyForecasts({ latitude = 0, longitude = 0, units = "metric" }: IUseForecastsParams) {
    const [forecasts, setForecasts] = useState<IDailyForecast[]>([]);
    const [statusForecasts, setStatusForecasts] = useState<StatusOperation>(StatusOperation.IDLE);
    const [errorMessageForecasts, setErrorMessageForecasts] = useState<string>("");

    useEffect(() => {
        let abortController: AbortController | null = null;

        const fetchData = async () => {
            setStatusForecasts(StatusOperation.PENDING);
            setErrorMessageForecasts("");

            try {
                abortController = new AbortController();
                const response: IForecastsResponse = await handlerForecasts({
                    signal: abortController.signal,
                    latitude,
                    longitude,
                    units,
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

        fetchData();

        return () => {
            if (abortController !== null) {
                abortController.abort();
            }
        };
    }, [latitude, longitude, units]);

    return { forecasts, statusForecasts, errorMessageForecasts };
}