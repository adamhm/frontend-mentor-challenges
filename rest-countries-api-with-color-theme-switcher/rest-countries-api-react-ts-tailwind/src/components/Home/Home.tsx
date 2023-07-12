import { useState } from "react";
import { Dropdown, SearchBox } from "@components";

function Home() {
    const [region, setRegion] = useState("Filter by Region");

    return (
        <main className="bg-lotion px-[5rem] py-[3rem]">
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
        </main>
    );
}

export default Home;
