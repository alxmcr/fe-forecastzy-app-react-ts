import { IPlacesRequest } from "../../@types/apiTypes";
import { IPlace } from "../../@types/appTypes";
import { firstPlaceAsType } from "../../helpers/apiHelpers";
import { handlerPlaces } from "../places";

export default async function handlerCity({
    signal,
    query = "",
}: IPlacesRequest): Promise<IPlace | undefined> {

    const places = await handlerPlaces({ signal, query });
    const firstCity = await firstPlaceAsType({ places, type: "city" });
    return firstCity;
}
