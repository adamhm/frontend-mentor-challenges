import { useState } from "react";
import { CountryList, Dropdown, SearchBox } from "@components";
import testData from "@data/test-data.json";

function Home() {
    const [region, setRegion] = useState("Filter by Region");

    return (
        <main className="mx-auto max-w-[1440px] bg-lotion px-[5rem] py-[3rem]">
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
            <CountryList countries={testData} />
        </main>
    );
}

export default Home;
