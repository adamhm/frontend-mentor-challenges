interface Country {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital?: string;
    [prop: string]: any;
}

type CountryName = {
    common: string;
    official: string;
    nativeName: { [lang: string]: { official: string; common: string } };
};

interface Country2 {
    flags: { svg: string; [imgType: string]: string };
    name: CountryName;
    population: number;
    region: string;
    capital: string[];
    [prop: string]: any;
}

interface CountryFullInfo extends Country2 {
    subregion: string;
    tld: Array<string>;
    currencies: { [currency: string]: { name: string; symbol: string } };
    languages: { [language: string]: string };
    borders: Array<string>;
}

export type { Country, CountryFullInfo, CountryName };
