type CountryName = {
    common: string;
    official: string;
    nativeName: { [lang: string]: { official: string; common: string } };
};

interface CountryBase {
    name: CountryName;
    cca3: string;
}

interface Country extends CountryBase {
    flags: { svg: string; [imgType: string]: string };
    population: number;
    region: string;
    capital: string[];
    [prop: string]: any;
}

interface CountryFullInfo extends Country {
    subregion: string;
    tld: Array<string> | undefined;
    currencies: { [currency: string]: { name: string; symbol: string } };
    languages: { [language: string]: string };
    borders: Array<string>;
}

type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

export type { Country, CountryBase, CountryFullInfo, CountryName, Region };
