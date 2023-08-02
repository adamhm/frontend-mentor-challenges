import { QueryFunction } from "@tanstack/react-query";
import { CountryFullInfo } from "@typedefs";

const getCountry: QueryFunction<
    CountryFullInfo[],
    [{ type: string; countryCode: string }]
> = async ({ queryKey }) => {
    const { countryCode } = queryKey[0];
    const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    return response.json() as Promise<CountryFullInfo[]>;
};

export default getCountry;
