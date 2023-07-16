import { CountryDetails, HomeContent } from "@components";

function Home() {
    return (
        <main className="mx-auto max-w-[1440px] bg-lotion px-[5rem] py-[3rem]">
            {false && <HomeContent />}
            <CountryDetails countryCode="ALG" />
        </main>
    );
}

export default Home;
