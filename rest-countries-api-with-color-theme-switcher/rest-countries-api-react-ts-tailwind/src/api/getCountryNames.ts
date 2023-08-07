import { QueryFunction } from "@tanstack/react-query";
import { z } from "zod";
import { countryBaseSchema } from "@schema";
import { CountryBase } from "@typedefs";

const getCountryNames: QueryFunction<
    CountryBase[],
    [{ type: string; countryCodes: string[] | undefined }]
> = async ({ queryKey }) => {
    const { countryCodes } = queryKey[0];

    if (!countryCodes) return Promise.resolve([]);

    const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(
            ","
        )}&fields=name,cca3`
    );

    return z.array(countryBaseSchema).parse(await response.json());
};

export default getCountryNames;
