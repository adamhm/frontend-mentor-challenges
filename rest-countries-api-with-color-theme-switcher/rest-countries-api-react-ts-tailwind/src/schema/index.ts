import { z } from "zod";

const countryNameSchema = z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z.optional(
        z.record(
            z.object({
                official: z.string(),
                common: z.string(),
            })
        )
    ),
});

const countryBaseSchema = z.object({
    name: countryNameSchema,
    cca3: z.string(),
});

const countrySchema = countryBaseSchema.extend({
    flags: z.record(z.string()).and(
        z.object({
            svg: z.string(),
        })
    ),
    population: z.number(),
    region: z.string(),
    capital: z.optional(z.array(z.string())),
});

const countryFullInfoSchema = countrySchema.extend({
    subregion: z.optional(z.string()),
    tld: z.optional(z.array(z.string())),
    currencies: z.optional(
        z.record(
            z.object({
                name: z.string(),
                symbol: z.optional(z.string()),
            })
        )
    ),
    languages: z.optional(z.record(z.string())),
    borders: z.optional(z.array(z.string())),
});

export {
    countryBaseSchema,
    countryFullInfoSchema,
    countrySchema,
    countryNameSchema,
};
