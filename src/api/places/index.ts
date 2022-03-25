import { IPlacesRequest, IPlacesURLParams } from "../../@types/apiTypes";
import { generateURLPlaces } from "../../helpers/apiHelpers";
import { IPlace } from "../../@types/appTypes";

export async function handlerPlaces(request: IPlacesRequest): Promise<IPlace[]> {
    const { signal, query } = request
    const requestOptions: RequestInit = {
        method: 'GET',
        signal: signal,
    };

    const urlParams: IPlacesURLParams = { query }
    const url = generateURLPlaces(urlParams);
    const response: Response = await fetch(url, requestOptions)

    if (response.status === 201) {
        return response.json();
    }

    return Promise.reject(response);
}