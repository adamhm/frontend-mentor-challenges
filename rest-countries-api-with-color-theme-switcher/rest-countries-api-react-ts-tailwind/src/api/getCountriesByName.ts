import { Country } from "@typedefs";

async function getCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    return response.json();
}

export default getCountriesByName;
