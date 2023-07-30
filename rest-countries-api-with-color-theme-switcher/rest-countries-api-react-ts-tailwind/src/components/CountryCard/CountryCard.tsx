import { Country } from "@typedefs";

type CountryCardProps = {
    country: Country;
    onChange: (countryCode: string | null) => void;
};

function CountryCard({
    country: { capital, cca3, flags, name, population, region },
    onChange,
}: CountryCardProps) {
    return (
        <button
            type="button"
            onClick={() => onChange(cca3)}
        >
            <img
                src={flags.svg}
                alt=""
                loading="lazy"
                className="h-[10rem] w-[16.5rem] object-cover"
            />
            <div className="p-6 text-[14px]">
                <h2 className="text-[18px]">
                    <strong>{name.common}</strong>
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
        </button>
    );
}

export default CountryCard;
