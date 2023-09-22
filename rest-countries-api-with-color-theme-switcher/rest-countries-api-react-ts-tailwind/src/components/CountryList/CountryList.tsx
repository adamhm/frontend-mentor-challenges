import { motion } from "framer-motion";

import { Country } from "@typedefs";
import { CountryCard } from "@components";

type CountryListProps = {
    countries: Array<Country>;
    onCountrySelect: (countryCode: Nullable<string>) => void;
};

function CountryList({ countries, onCountrySelect }: CountryListProps) {
    return (
        <motion.section
            className="mt-12 grid grid-cols-[repeat(auto-fill,16.5rem)] justify-center gap-[4.5rem] md:justify-between"
            variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            initial="hidden"
            animate="visible"
        >
            {countries.map((country) => (
                <CountryCard
                    country={country}
                    key={country.cca3}
                    onCountrySelect={onCountrySelect}
                />
            ))}
        </motion.section>
    );
}

export default CountryList;
