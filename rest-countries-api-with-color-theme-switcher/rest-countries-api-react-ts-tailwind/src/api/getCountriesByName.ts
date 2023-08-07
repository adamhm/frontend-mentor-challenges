import { z } from "zod";
import { Country } from "@typedefs";
import { countrySchema } from "@schema";

async function getCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    return z.array(countrySchema).parse(await response.json());
}

export default getCountriesByName;
