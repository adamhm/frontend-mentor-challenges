import { CountryList, Dropdown, SearchBox } from "@components";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@api";
import countryComparer from "@shared/country-comparer";
import { Region } from "@typedefs";

type HomeContentProps = {
    debouncedValue: string;
    region: Region | null;
    searchTerm: string;
    onCountrySelect: (countryCode: string | null) => void;
    onRegionChange: (region: Region | null) => void;
    onSearchTermChange: (value: string) => void;
};

function HomeContent({
    debouncedValue,
    region,
    searchTerm,
    onCountrySelect,
    onRegionChange,
    onSearchTermChange,
}: HomeContentProps) {
    const {
        data = [],
        isError,
        isLoading,
    } = useQuery({
        queryKey: [
            {
                type: "countries",
                region: debouncedValue.trim() ? null : region,
                searchTerm: debouncedValue.trim(),
            },
        ],
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
            <CountryList countries={data} onCountrySelect={onCountrySelect} />
        );
    }

    return (
        <>
            <div className="flex">
                <SearchBox
                    value={searchTerm}
                    onChange={(e) => onSearchTermChange(e.target.value)}
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
                        onChange={(item) => onRegionChange(item)}
                    />
                </div>
            </div>
            {countryList}
        </>
    );
}

export default HomeContent;
