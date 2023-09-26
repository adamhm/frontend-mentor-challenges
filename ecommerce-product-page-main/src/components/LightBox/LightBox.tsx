import { motion } from "framer-motion";

import { ImagePanel } from "@components";
import { ReactComponent as CloseIcon } from "@assets/icon-close.svg";
import data from "@data/products.json";

type LightBoxProps = {
    initial: number;
    onClose?(): void;
};

function LightBox({ initial, onClose }: LightBoxProps) {
    return (
        <>
            <motion.div
                className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-75"
                initial={{
                    opacity: 0,
                }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
            />
            <motion.dialog
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.25 }}
                className="z-20 bg-transparent"
                open
            >
                <div className="max-w-[615px] bg-transparent px-8">
                    <button
                        aria-label="close"
                        className="mb-6 ml-auto block text-white transition-colors duration-500 hover:text-orange"
                        onClick={onClose}
                    >
                        <CloseIcon className="h-8 w-8" aria-hidden />
                    </button>
                    <ImagePanel
                        navigation="visible"
                        product={data.products[0]}
                        initial={initial}
                    />
                </div>
            </motion.dialog>
        </>
    );
}

export default LightBox;
