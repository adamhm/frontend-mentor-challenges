import { z } from "zod";
import { QueryFunction } from "@tanstack/react-query";
import { CountryFullInfo } from "@typedefs";
import { countryFullInfoSchema } from "@schema";

const getCountry: QueryFunction<
    CountryFullInfo[],
    [{ type: string; countryCode: string }]
> = async ({ queryKey }) => {
    const { countryCode } = queryKey[0];
    const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    return z.array(countryFullInfoSchema).parse(await response.json());
};

export default getCountry;
