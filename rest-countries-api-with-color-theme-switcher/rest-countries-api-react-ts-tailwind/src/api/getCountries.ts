import { QueryFunction } from "@tanstack/react-query";
import { Country, Region } from "@typedefs";
import {
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
} from "@api";

const getCountries: QueryFunction<
    Country[],
    [{ type: string; region: Nullable<Region>; searchTerm: string }]
> = async ({ queryKey }) => {
    const { region, searchTerm } = queryKey[0];

    if (searchTerm.trim()) {
        return getCountriesByName(searchTerm);
    }

    if (region) {
        return getCountriesByRegion(region);
    }

    return getAllCountries();
};

export default getCountries;
