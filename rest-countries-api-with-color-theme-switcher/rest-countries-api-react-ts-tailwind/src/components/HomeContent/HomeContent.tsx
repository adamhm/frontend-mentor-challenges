import { CountryList, Dropdown, SearchBox } from "@components";
import { Region } from "@typedefs";
import useHomeContent from "@hooks/useHomeContent";

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
    const { data, isError, isLoading } = useHomeContent(region, debouncedValue);

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
            <div className="flex flex-col md:flex-row">
                <SearchBox
                    value={searchTerm}
                    onChange={(e) => onSearchTermChange(e.target.value)}
                />
                <div className="mt-[80px] md:ml-auto md:mt-0">
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
