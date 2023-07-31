import { Country } from "@typedefs";

type CountryCardProps = {
    country: Country;
    onCountrySelect: (countryCode: string | null) => void;
};

function CountryCard({
    country: { capital, cca3, flags, name, population, region },
    onCountrySelect,
}: CountryCardProps) {
    return (
        <button
            type="button"
            className="flex h-[21rem] w-[16.5rem] flex-col rounded-md bg-white shadow-[0px_0px_8px_rgba(240,240,240,0.6)] dark:bg-outer-space dark:shadow-none"
            onClick={() => onCountrySelect(cca3)}
        >
            <img
                src={flags.svg}
                alt=""
                loading="lazy"
                className="h-[10rem] w-[16.5rem] rounded-t-md object-cover"
            />
            <div className="p-6 text-left text-[14px] dark:text-white">
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
