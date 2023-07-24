type CountryName = {
    common: string;
    official: string;
    nativeName: { [lang: string]: { official: string; common: string } };
};

interface CountryBase {
    name: CountryName;
    cioc: string;
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
    tld: Array<string>;
    currencies: { [currency: string]: { name: string; symbol: string } };
    languages: { [language: string]: string };
    borders: Array<string>;
}

export type { Country, CountryBase, CountryFullInfo, CountryName };
