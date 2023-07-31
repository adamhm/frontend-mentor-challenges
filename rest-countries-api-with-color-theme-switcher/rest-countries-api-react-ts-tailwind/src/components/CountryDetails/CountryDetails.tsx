import useCountryDetails from "@hooks/useCountryDetails";
import { ReactComponent as ArrowIcon } from "@assets/arrow-back-sharp.svg";

type CountryDetailsProps = {
    countryCode: string;
    onCountrySelect: (countryCode: string | null) => void;
};

function CountryDetails({ countryCode, onCountrySelect }: CountryDetailsProps) {
    const {
        country,
        isCountryError,
        isCountryLoading,
        borders,
        isBordersError,
        isBordersLoading,
    } = useCountryDetails(countryCode);

    if (!country || isCountryLoading || isBordersLoading) {
        return null;
    }

    if (isCountryError || isBordersError) return <div>Error</div>;

    return (
        <section className="dark:text-white">
            <button
                type="button"
                className="mt-[30px] h-[40px] w-[136px] rounded-md shadow-[0px_0px_8px_rgba(240,240,240,0.6)] dark:bg-outer-space dark:shadow-none"
                onClick={() => onCountrySelect(null)}
            >
                <ArrowIcon className="mr-3 inline h-5 w-5" aria-hidden />
                Back
            </button>
            <div className="mt-[80px] flex items-center">
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
                                {country.tld?.join(", ")}
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
                                    key={border.cca3}
                                    className="h-8 rounded border-2 border-gray-200 px-7 text-[14px] dark:border-none dark:bg-outer-space"
                                    onClick={() => onCountrySelect(border.cca3)}
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
