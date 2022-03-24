interface IPlacesRequest {
    query: string;
}

export default function handleSearchCity({ query = "" }: IPlacesRequest) {
    console.log("Searching for city: " + query);
};