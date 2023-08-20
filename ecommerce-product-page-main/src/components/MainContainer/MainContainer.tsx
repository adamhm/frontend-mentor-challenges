import { ImagePanel, InfoPanel } from "@components";
import data from "@data/products.json";

function MainContainer() {
    return (
        <main className="mt-[90px] flex justify-center">
            <section className="flex max-w-[1110px] grow">
                <ImagePanel product={data.products[0]} />
                <InfoPanel product={data.products[0]} />
            </section>
        </main>
    );
}

export default MainContainer;
