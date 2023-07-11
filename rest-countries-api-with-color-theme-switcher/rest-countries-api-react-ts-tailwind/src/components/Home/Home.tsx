import { Dropdown, SearchBox } from "@components";

function Home() {
    return (
        <main className="px-[5rem] py-[3rem]">
            <div className="flex">
                <SearchBox />
                <Dropdown />
            </div>
        </main>
    );
}

export default Home;
