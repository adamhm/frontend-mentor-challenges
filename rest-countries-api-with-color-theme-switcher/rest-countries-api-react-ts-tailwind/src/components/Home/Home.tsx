import { AnimatePresence } from "framer-motion";

import { CountryDetails, HomeContent } from "@components";
import { useCallback, useState } from "react";
import useDebounce from "@hooks/useDebounce";
import { Region } from "@typedefs";

function Home() {
    const [detailedCountry, setDetailedCountry] =
        useState<Nullable<string>>(null);
    const [selectedRegion, setSelectedRegion] =
        useState<Nullable<Region>>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedValue = useDebounce(searchTerm, 500);

    const handleCountrySelect = useCallback(
        (countryCode: Nullable<string>) => setDetailedCountry(countryCode),
        [setDetailedCountry]
    );

    return (
        <main className="mx-auto max-w-[1440px] bg-lotion px-8 py-12 dark:bg-yankees-blue md:px-[5rem]">
            {!detailedCountry && (
                <HomeContent
                    debouncedValue={debouncedValue}
                    searchTerm={searchTerm}
                    onSearchTermChange={(value) => setSearchTerm(value)}
                    onCountrySelect={handleCountrySelect}
                    region={selectedRegion}
                    onRegionChange={(region) => setSelectedRegion(region)}
                />
            )}
            <AnimatePresence>
                {detailedCountry && (
                    <CountryDetails
                        key="countryDetails"
                        countryCode={detailedCountry}
                        onCountrySelect={handleCountrySelect}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

export default Home;
