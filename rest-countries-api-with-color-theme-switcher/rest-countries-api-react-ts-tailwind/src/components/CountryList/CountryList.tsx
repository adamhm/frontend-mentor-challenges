import { Country } from "@typedefs";
import { CountryCard } from "@components";

type CountryListProps = {
    countries: Array<Country>;
};

function CountryList({ countries }: CountryListProps) {
    return (
        <section className="mt-12 grid grid-cols-4 justify-between">
            {countries.map((country) => (
                <CountryCard country={country} />
            ))}
        </section>
    );
}

export default CountryList;
