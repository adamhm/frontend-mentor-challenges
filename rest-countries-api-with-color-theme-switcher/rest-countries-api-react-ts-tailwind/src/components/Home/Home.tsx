import { CountryDetails, HomeContent } from "@components";
import { useCallback, useState } from "react";

function Home() {
    const [detailedCountry, setDetailedCountry] = useState<string | null>(null);

    const handleChange = useCallback(
        (countryCode: string | null) => setDetailedCountry(countryCode),
        [setDetailedCountry]
    );

    return (
        <main className="mx-auto max-w-[1440px] bg-lotion px-[5rem] py-[3rem] dark:bg-yankees-blue">
            {!detailedCountry && <HomeContent onChange={handleChange} />}
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
