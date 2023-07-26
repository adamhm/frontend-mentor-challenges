import { QueryFunction } from "@tanstack/react-query";
import { Country, Region } from "@typedefs";
import {
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
} from "@api";

const getCountries: QueryFunction<
    Country[],
    [string, Region | null, string]
> = async ({ queryKey }) => {
    const [, region, searchString] = queryKey;

    if (searchString.trim()) {
        return getCountriesByName(searchString.trim());
    }

    if (region) {
        return getCountriesByRegion(region);
    }

    return getAllCountries();
};

export default getCountries;
