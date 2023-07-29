import { QueryFunction } from "@tanstack/react-query";
import { CountryBase } from "@typedefs";

const getCountryNames: QueryFunction<
    CountryBase[],
    [string, string[] | undefined]
> = async ({ queryKey }) => {
    const [, countryCodes] = queryKey;

    if (!countryCodes) return Promise.resolve([]) as Promise<CountryBase[]>;

    const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(
            ","
        )}&fields=name,cca3`
    );

    return response.json() as Promise<CountryBase[]>;
};

export default getCountryNames;
