import { useState } from "react";
import { CountryList, Dropdown, SearchBox } from "@components";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@api";
import countryComparer from "@shared/country-comparer";
import useDebounce from "@hooks/useDebounce";
import { Region } from "@typedefs";

type HomeContentProps = {
    onChange: (countryCode: string | null) => void;
};

function HomeContent({ onChange }: HomeContentProps) {
    const [region, setRegion] = useState<Region | null>(null);
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);

    const {
        data = [],
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["countries", region, debouncedValue],
        queryFn: getCountries,
        select: (countries) => countries.sort(countryComparer),
    });

    let countryList: React.ReactNode;

    if (isLoading) {
        countryList = null;
    } else if (isError) {
        countryList = <div>Error</div>;
    } else {
        countryList = (
            <CountryList countries={data} onChange={(cca3) => onChange(cca3)} />
        );
    }

    return (
        <>
            <div className="flex">
                <SearchBox
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
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
