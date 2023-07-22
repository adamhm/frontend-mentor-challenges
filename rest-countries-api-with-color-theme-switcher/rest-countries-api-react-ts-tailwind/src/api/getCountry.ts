import { QueryFunction } from "@tanstack/react-query";
import { CountryFullInfo } from "@typedefs";

const getCountry2: QueryFunction<CountryFullInfo[], [string, string]> = async ({
    queryKey,
}) => {
    const [, countryCode] = queryKey;
    const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    return response.json() as Promise<CountryFullInfo[]>;
};

export default getCountry2;
