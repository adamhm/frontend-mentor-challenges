import { Country, Region } from "@typedefs";

async function getCountriesByRegion(region: Region): Promise<Country[]> {
    const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
    );

    return response.json();
}

export default getCountriesByRegion;
