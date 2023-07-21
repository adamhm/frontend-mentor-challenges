import { CountryName } from "@typedefs";

async function getCountryNames(
    countryCodes: string[] | undefined
): Promise<{ name: CountryName }[]> {
    if (!countryCodes)
        return Promise.resolve([]) as Promise<{ name: CountryName }[]>;

    const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(
            ","
        )}&fields=name,cioc`
    );
    return response.json() as Promise<{ name: CountryName }[]>;
}

export default getCountryNames;
