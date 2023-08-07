import { z } from "zod";
import {
    countrySchema,
    countryBaseSchema,
    countryFullInfoSchema,
    countryNameSchema,
} from "@schema";

// type CountryName = {
//     common: string;
//     official: string;
//     nativeName: { [lang: string]: { official: string; common: string } };
// };

type CountryName = z.infer<typeof countryNameSchema>;

// interface CountryBase {
//     name: CountryName;
//     cca3: string;
// }

interface CountryBase extends z.infer<typeof countryBaseSchema> {}

// interface Country extends CountryBase {
//     flags: { svg: string; [imgType: string]: string };
//     population: number;
//     region: string;
//     capital: string[];
//     [prop: string]: any;
// }

interface Country extends z.infer<typeof countrySchema> {}

// interface CountryFullInfo extends Country {
//     subregion: string;
//     tld: Array<string> | undefined;
//     currencies: { [currency: string]: { name: string; symbol: string } };
//     languages: { [language: string]: string };
//     borders: Array<string>;
// }

interface CountryFullInfo extends z.infer<typeof countryFullInfoSchema> {}

type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

export type { Country, CountryBase, CountryFullInfo, CountryName, Region };
