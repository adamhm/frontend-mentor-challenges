import { CountryList, Dropdown, ErrorMessage, SearchBox } from "@components";
import { Region } from "@typedefs";
import useHomeContent from "@hooks/useHomeContent";

type HomeContentProps = {
    debouncedValue: string;
    region: Nullable<Region>;
    searchTerm: string;
    onCountrySelect: (countryCode: Nullable<string>) => void;
    onRegionChange: (region: Nullable<Region>) => void;
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
        countryList = (
            <ErrorMessage message="Oops! Something went wrong. Please, try again later." />
        );
    } else if (data.length === 0) {
        countryList = (
            <ErrorMessage message="Sorry, no results were found for your query." />
        );
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
