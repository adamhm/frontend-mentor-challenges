async function getCountry(countryCode: string) {
    const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    return response.json();
}

export default getCountry;
