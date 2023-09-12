import { useState } from "react";

import useKeyDown from "@hooks/useKeyDown";
import { ImagePanel, InfoPanel, LightBox } from "@components";
import data from "@data/products.json";

function MainContainer() {
    const [showLightBox, setShowLightBox] = useState(false);
    const [activeImage, setActiveImage] = useState(1);

    useKeyDown("Escape", () => setShowLightBox(false));

    return (
        <main className="mt-[90px] flex justify-center">
            <section className="flex max-w-[1110px] grow">
                <section className="w-6/12 pl-12 pr-[62px]">
                    <ImagePanel
                        product={data.products[0]}
                        onClick={() => setShowLightBox(true)}
                        onActiveChange={(active) => setActiveImage(active)}
                    />
                </section>
                <section className="flex w-6/12 flex-col justify-center pl-[62px] pr-12">
                    <InfoPanel product={data.products[0]} />
                </section>
            </section>
            {showLightBox && (
                <LightBox
                    initial={activeImage}
                    onClose={() => setShowLightBox(false)}
                />
            )}
        </main>
    );
}

export default MainContainer;
