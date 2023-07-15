import { Country } from "@typedefs";

type CountryCardProps = {
    country: Country;
};

function CountryCard({
    country: { capital, flag, name, population, region },
}: CountryCardProps) {
    return (
        <section className="h-[21rem] w-[16.5rem] bg-white shadow-[0px_0px_8px_rgba(240,240,240,0.6)]">
                <strong>Population:</strong> {population}
            </p>
            <p>
                <strong>Region:</strong> {region}
            </p>
            <p>
                <strong>Capital:</strong> {capital}
            </p>
        </section>
    );
}

export default CountryCard;
