import { useQuery } from "@tanstack/react-query";
import getCountry from "@api/getCountry";
import getCountryNames from "@api/getCountryNames";

type CountryDetailsProps = {
    countryCode: string;
    onChange: (countryCode: string | null) => void;
};

function CountryDetails({ countryCode, onChange }: CountryDetailsProps) {
    const {
        data: country,
        isError: isCountryError,
        isLoading: isCountryLoading,
    } = useQuery({
        queryKey: ["fullInfo", countryCode],
        queryFn: getCountry,
        select: (countries) => countries[0],
    });

    const {
        data: borders = [],
        isError: isBordersError,
        isLoading: isBordersLoading,
    } = useQuery({
        queryKey: ["borders", country?.borders],
        queryFn: getCountryNames,
        enabled: !!country,
    });

    if (isCountryLoading || isBordersLoading) {
        return null;
    }

    if (isCountryError || isBordersError) return <div>Error</div>;

    return (
        <section className="">
            <button type="button" onClick={() => onChange(null)}>
                Back
            </button>
            <div className="flex items-center">
                <img
                    src={country.flags.svg}
                    alt=""
                    className="h-[400px] w-[560px]"
                />
                <div className="ml-[120px] w-full">
                    <h2 className="mb-6 text-[2rem] font-bold">
                        {country.name.common}
                    </h2>
                    <div className="flex">
                        <div>
                            <p>
                                <strong>Native Name: </strong>
                                {
                                    Object.values(country.name.nativeName)[0]
                                        .common
                                }
                            </p>
                            <p className="mt-2">
                                <strong>Population: </strong>
                                {country.population.toLocaleString("en-us")}
                            </p>
                            <p className="mt-2">
                                <strong>Region: </strong>
                                {country.region}
                            </p>
                            <p className="mt-2">
                                <strong>Sub Region: </strong>
                                {country.subregion}
                            </p>
                            <p className="mt-2">
                                <strong>Capital: </strong>
                                {country.capital.join(", ")}
                            </p>
                        </div>
                        <div className="ml-auto">
                            <p>
                                <strong>Top Level Domain: </strong>
                                {country.tld.join(", ")}
                            </p>
                            <p className="mt-2">
                                <strong>Currencies: </strong>
                                {Object.keys(country.currencies).join(", ")}
                            </p>
                            <p className="mt-2">
                                <strong>Languages: </strong>
                                {Object.values(country.languages).join(", ")}
                            </p>
                        </div>
                    </div>
                    <div className="mt-[5rem] flex">
                        <strong className="mr-4 shrink-0">
                            Border Countries:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                            {borders.map((border) => (
                                <button
                                    type="button"
                                    key={border.cioc}
                                    className="h-8 rounded border-2 border-gray-200 px-7 text-[14px]"
                                    onClick={() => onChange(border.cioc)}
                                >
                                    {border.name.common}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountryDetails;
