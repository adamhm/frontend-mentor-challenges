import { QueryFunction } from "@tanstack/react-query";
import { Country } from "@typedefs";

const getCountriesByRegion: QueryFunction<
    Country[],
    [string, string]
> = async ({ queryKey }) => {
    const [, region] = queryKey;

    const url =
        region === "all"
            ? "https://restcountries.com/v3.1/all"
            : `https://restcountries.com/v3.1/region/${region}`;

    const response = await fetch(url);

    return response.json() as Promise<Country[]>;
};

export default getCountriesByRegion;
