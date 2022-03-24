import { IForecastsRequest, IForecastsResponse, IForecastsURLParams } from "../../@types/apiTypes";
import { generateURLForecasts } from "../../helpers/apiHelpers";

export default async function handlerForecasts(request: IForecastsRequest): Promise<IForecastsResponse> {
    const { signal, latitude, longitude, units, exclude } = request
    const requestOptions: RequestInit = {
        method: 'GET',
        signal: signal,
    };

    const urlParams: IForecastsURLParams = { latitude, longitude, units, exclude }
    const url = generateURLForecasts(urlParams);
    const response: Response = await fetch(url, requestOptions)

    if (response.status === 200) {
        return response.json();
    }

    return Promise.reject(response);
}