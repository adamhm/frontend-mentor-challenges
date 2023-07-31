import { CountryList, Dropdown, SearchBox } from "@components";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@api";
import countryComparer from "@shared/country-comparer";
import { Region } from "@typedefs";

type HomeContentProps = {
    debouncedValue: string;
    region: Region | null;
    searchTerm: string;
    onChange: (countryCode: string | null) => void;
    onRegionChange: (region: Region | null) => void;
    onSearchTermChange: (value: string) => void;
};

function HomeContent({
    debouncedValue,
    region,
    searchTerm,
    onChange,
    onRegionChange,
    onSearchTermChange,
}: HomeContentProps) {
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
