import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import useKeyDown from "@hooks/useKeyDown";
import { ImagePanel, InfoPanel, LightBox } from "@components";
import useMobileView from "@hooks/useMobileView";
import data from "@data/products.json";

function MainContainer() {
    const [showLightBox, setShowLightBox] = useState(false);
    const [activeImage, setActiveImage] = useState(1);
    const isMobileView = useMobileView(768);

    const handleClick = () => !isMobileView && setShowLightBox(true);

    const handleClose = () => setShowLightBox(false);

    useKeyDown("Escape", handleClose);

    return (
        <main className="flex items-center justify-center md:mt-[90px]">
            <section className="flex w-full shrink grow flex-col md:flex-row lg:max-w-[1110px]">
                <section className="w-full md:w-6/12 md:pl-12 md:pr-[62px]">
                    <ImagePanel
                        initial={activeImage}
                        product={data.products[0]}
                        onClick={handleClick}
                        onActiveChange={(active) => setActiveImage(active)}
                        navigation={isMobileView ? "visible" : "hidden"}
                    />
                </section>
                <section className="flex w-full flex-col justify-center px-6 md:w-6/12 md:pl-[62px] md:pr-12">
                    <InfoPanel product={data.products[0]} />
                </section>
            </section>

            <AnimatePresence>
                {showLightBox && (
                    <LightBox initial={activeImage} onClose={handleClose} />
                )}
            </AnimatePresence>
        </main>
    );
}

export default MainContainer;
