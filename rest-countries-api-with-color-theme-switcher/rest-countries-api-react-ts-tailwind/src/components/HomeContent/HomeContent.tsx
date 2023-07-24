import { useState } from "react";
import { CountryList, Dropdown, SearchBox } from "@components";
import { useQuery } from "@tanstack/react-query";
import { getCountriesByRegion } from "@api/";
import countryComparer from "@shared/country-comparer";

function HomeContent() {
    const [region, setRegion] = useState("Filter by Region");

    const {
        data = [],
        isError,
        isLoading,
    } = useQuery({
        queryKey:
            region === "Filter by Region"
                ? ["countries", "all"]
                : ["countries", region],
        queryFn: getCountriesByRegion,
        select: (countries) => countries.sort(countryComparer),
    });

    let countryList: React.ReactNode;

    if (isLoading) {
        countryList = null;
    } else if (isError) {
        countryList = <div>Error</div>;
    } else {
        countryList = <CountryList countries={data} />;
    }

    return (
        <>
            <div className="flex">
                <SearchBox />
                <div className="ml-auto">
                    <Dropdown
                        items={[
                            "Africa",
                            "America",
                            "Asia",
                            "Europe",
                            "Oceania",
                        ]}
                        selectedItem={region}
                        onChange={(item) => setRegion(item)}
                    />
                </div>
            </div>
            {countryList}
        </>
    );
}

export default HomeContent;
