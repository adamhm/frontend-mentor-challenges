import { QueryFunction } from "@tanstack/react-query";
import { Country } from "@typedefs";

const getCountriesByName: QueryFunction<Country[], [string, string]> = async ({
    queryKey,
}) => {
    const [, name] = queryKey;
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    return response.json();
};

export default getCountriesByName;
