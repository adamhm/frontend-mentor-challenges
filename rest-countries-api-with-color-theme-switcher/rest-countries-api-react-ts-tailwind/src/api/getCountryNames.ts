import { QueryFunction } from "@tanstack/react-query";
import { CountryName } from "@typedefs";

const getCountryNames: QueryFunction<
    { name: CountryName; cioc: string }[],
    [string, string[] | undefined]
> = async ({ queryKey }) => {
    const [, countryCodes] = queryKey;

    if (!countryCodes)
        return Promise.resolve([]) as Promise<
            { name: CountryName; cioc: string }[]
        >;

    const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(
            ","
        )}&fields=name,cioc`
    );

    return response.json() as Promise<{ name: CountryName; cioc: string }[]>;
};

export default getCountryNames;
