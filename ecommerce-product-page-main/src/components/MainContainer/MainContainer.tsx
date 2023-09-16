import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";

import useKeyDown from "@hooks/useKeyDown";
import { ImagePanel, InfoPanel, LightBox } from "@components";
import data from "@data/products.json";

function MainContainer() {
    const [showLightBox, setShowLightBox] = useState(false);
    const [activeImage, setActiveImage] = useState(1);
    const dialogRef = useRef<HTMLDialogElement>(null);

    // useEffect(() => {
    //     if (showLightBox) {
    //         dialogRef.current?.showModal();
    //     } else {
    //         dialogRef.current?.close();
    //     }
    // });

    const handleClick = () => setShowLightBox(true);

    const handleClose = () => setShowLightBox(false);

    useKeyDown("Escape", handleClose);

    return (
        <main className="mt-[90px] flex items-center justify-center">
            <section className="flex max-w-[1110px] grow">
                <section className="w-6/12 pl-12 pr-[62px]">
                    <ImagePanel
                        initial={activeImage}
                        product={data.products[0]}
                        onClick={handleClick}
                        onActiveChange={(active) => setActiveImage(active)}
                    />
                </section>
                <section className="flex w-6/12 flex-col justify-center pl-[62px] pr-12">
                    <InfoPanel product={data.products[0]} />
                </section>
            </section>

            <AnimatePresence>
                {showLightBox && (
                    <LightBox
                        initial={activeImage}
                        ref={dialogRef}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

export default MainContainer;
