import { CountryDetails, HomeContent } from "@components";
import { useCallback, useState } from "react";
import useDebounce from "@hooks/useDebounce";
import { Region } from "@typedefs";

function Home() {
    const [detailedCountry, setDetailedCountry] = useState<string | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedValue = useDebounce(searchTerm, 500);

    const handleChange = useCallback(
        (countryCode: string | null) => setDetailedCountry(countryCode),
        [setDetailedCountry]
    );

    return (
        <main className="mx-auto max-w-[1440px] bg-lotion px-[5rem] py-[3rem] dark:bg-yankees-blue">
            {!detailedCountry && (
                <HomeContent
                    debouncedValue={debouncedValue}
                    searchTerm={searchTerm}
                    onSearchTermChange={(value) => setSearchTerm(value)}
                    onChange={handleChange}
                    region={selectedRegion}
                    onRegionChange={(region) => setSelectedRegion(region)}
                />
            )}
            {detailedCountry && (
                <CountryDetails
                    countryCode={detailedCountry}
                    onChange={handleChange}
                />
            )}
        </main>
    );
}

export default Home;
