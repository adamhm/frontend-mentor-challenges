import { Country } from "@typedefs";
import { CountryCard } from "@components";

type CountryListProps = {
    countries: Array<Country>;
    onCountrySelect: (countryCode: string | null) => void;
};

function CountryList({ countries, onCountrySelect }: CountryListProps) {
    return (
        <section className="mt-12 grid grid-cols-[repeat(auto-fill,16.5rem)] justify-between gap-[4.5rem]">
            {countries.map((country) => (
                <CountryCard
                    country={country}
                    key={country.cca3}
                    onCountrySelect={onCountrySelect}
                />
            ))}
        </section>
    );
}

export default CountryList;
