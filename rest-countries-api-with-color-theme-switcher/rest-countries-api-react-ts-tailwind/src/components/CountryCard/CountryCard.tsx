import { Country } from "@typedefs";

type CountryCardProps = {
    country: Country;
};

function CountryCard({
    country: { capital, flag, name, population, region },
}: CountryCardProps) {
    return (
        <section className="h-[21rem] w-[16.5rem] bg-white shadow-[0px_0px_8px_rgba(240,240,240,0.6)]">
            <img
                src={flag}
                alt=""
                className="h-[10rem] w-[16.5rem] object-cover"
            />
            <div className="p-6 text-[14px]">
                <h2 className="text-[18px]">
                    <strong>{name}</strong>
                </h2>
                <p className="mt-3">
                    <strong>Population:</strong> {population}
                </p>
                <p>
                    <strong>Region:</strong> {region}
                </p>
                <p>
                    <strong>Capital:</strong> {capital}
                </p>
            </div>
        </section>
    );
}

export default CountryCard;
