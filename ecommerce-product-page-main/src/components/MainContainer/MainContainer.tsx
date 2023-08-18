import { ImagePanel, InfoPanel } from "@components";

function MainContainer() {
    return (
        <main className="mt-[90px] flex justify-center">
            <section className="flex max-w-[1110px] grow">
                <ImagePanel />
                <InfoPanel />
            </section>
        </main>
    );
}

export default MainContainer;
