interface Country {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital?: string;
    [prop: string]: any;
}

interface CountryDetails extends Country {}

export type { Country, CountryDetails };
