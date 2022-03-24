import { IPlacesRequest } from "../../@types/apiTypes";
import { IPlace } from "../../@types/appTypes";
import { firstPlaceAsType } from "../../helpers/apiHelpers";
import { handlerPlaces } from "../places";

export default async function handlerCity({
    signal,
    query = "",
}: IPlacesRequest): Promise<IPlace | undefined> {

    const places = await handlerPlaces({ signal, query });
    console.log({ places });
    const firstCity = await firstPlaceAsType({ places, type: "city" });
    console.log({ firstCity })
    return firstCity;
}
