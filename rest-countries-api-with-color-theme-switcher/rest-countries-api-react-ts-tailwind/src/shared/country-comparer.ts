import { Country } from "@typedefs";

function countryComparer(c1: Country, c2: Country) {
    if (c1.name.common > c2.name.common) {
        return 1;
    }

    if (c1.name.common < c2.name.common) {
        return -1;
    }

    return 0;
}

export default countryComparer;
