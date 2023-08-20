import data from "@data/products.json";

export type Product = (typeof data.products)[number];
