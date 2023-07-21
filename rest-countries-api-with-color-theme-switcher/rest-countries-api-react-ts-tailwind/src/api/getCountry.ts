import { QueryFunctionContext } from "@tanstack/react-query";
import { CountryFullInfo } from "@typedefs";

async function getCountry({ queryKey: [, countryCode] }: QueryFunctionContext) {
    const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data: CountryFullInfo[] = await response.json();

    return Promise.resolve(data[0]);
}

export default getCountry;
