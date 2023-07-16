type CountryDetailsProps = {
    countryCode: string;
};

function CountryDetails({ countryCode }: CountryDetailsProps) {
    return (
        <section className="">
            <button type="button">Back</button>
            <div className="flex items-center">
                <img
                    src="https://flagcdn.com/be.svg"
                    alt=""
                    className="h-[400px] w-[560px]"
                />
                <div className="ml-[120px] w-full">
                    <h2 className="mb-6 text-[2rem] font-bold">Belgium</h2>
                    <div className="flex">
                        <div>
                            <p>
                                <strong>Native Name: </strong>
                                "Belgie"
                            </p>
                            <p className="mt-2">
                                <strong>Population: </strong>
                                11,319,511
                            </p>
                            <p className="mt-2">
                                <strong>Region: </strong>
                                Europe
                            </p>
                            <p className="mt-2">
                                <strong>Sub Region: </strong>
                                Western Europe
                            </p>
                            <p className="mt-2">
                                <strong>Capital: </strong>
                                Brussels
                            </p>
                        </div>
                        <div className="ml-auto">
                            <p>
                                <strong>Top Level Domain: </strong>.be
                            </p>
                            <p className="mt-2">
                                <strong>Currencies: </strong>Euro
                            </p>
                            <p className="mt-2">
                                <strong>Languages: </strong>Dutch, French,
                                German
                            </p>
                        </div>
                    </div>
                    <div className="mt-[5rem]">
                        <strong className="mr-4">Border Countries:</strong>
                        <button
                            type="button"
                            className="mr-2 h-8 rounded border-2 border-gray-200 px-7 text-[14px]"
                        >
                            France
                        </button>
                        <button
                            type="button"
                            className="mr-2 h-8 rounded border-2 border-gray-200 px-7 text-[14px]"
                        >
                            Germany
                        </button>
                        <button
                            type="button"
                            className="h-8 rounded border-2 border-gray-200 px-7 text-[14px]"
                        >
                            Netherlands
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountryDetails;
