import { Country } from "@typedefs";

async function getAllCountries(): Promise<Country[]> {
    const response = await fetch("https://restcountries.com/v3.1/all");

    return response.json();
}

export default getAllCountries;
