import { z } from "zod";
import { Country, Region } from "@typedefs";
import { countrySchema } from "@schema";

async function getCountriesByRegion(region: Region): Promise<Country[]> {
    const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
    );

    return z.array(countrySchema).parse(await response.json());
}

export default getCountriesByRegion;
