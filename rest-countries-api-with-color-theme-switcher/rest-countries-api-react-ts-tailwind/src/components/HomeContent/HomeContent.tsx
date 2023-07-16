import { useState } from "react";
import { CountryList, Dropdown, SearchBox } from "@components";
import testData from "@data/test-data.json";

function HomeContent() {
    const [region, setRegion] = useState("Filter by Region");

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
            <CountryList countries={testData} />
        </>
    );
}

export default HomeContent;
