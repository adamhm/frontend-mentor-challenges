import { useEffect } from "react";
import { motion } from "framer-motion";

import type { Product } from "@typedefs";
import useImagePanel from "@hooks/useImagePanel";
import { ReactComponent as BackIcon } from "@assets/icon-back.svg";
import { ReactComponent as ForwardIcon } from "@assets/icon-forward.svg";

type ImagePanelProps = {
    initial: number;
    navigation?: "visible" | "hidden";
    product: Product;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
    onActiveChange?(active: number): void;
};

function ImagePanel({
    initial,
    navigation = "hidden",
    product,
    onClick,
    onActiveChange,
}: ImagePanelProps) {
    const { activeImage, setActiveImage, setPreviousImage, setNextImage } =
        useImagePanel(product.images.thumbnails.length, initial);

    useEffect(() => onActiveChange?.(activeImage), [activeImage]);

    return (
        <>
            <div className="relative">
                <img
                    src={`./images/image-product-${activeImage}.jpg`}
                    alt=""
                    className="rounded-xl"
                    onClick={onClick}
                />
                {navigation == "visible" && (
                    <>
                        <button
                            aria-label="Previous image"
                            onClick={setPreviousImage}
                            className="absolute left-[-30px] top-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition-colors duration-500 hover:text-orange"
                        >
                            <BackIcon className="h-7 w-7" aria-hidden />
                        </button>
                        <button
                            aria-label="Next image"
                            onClick={setNextImage}
                            className="absolute right-[-30px] top-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition-colors duration-500 hover:text-orange"
                        >
                            <ForwardIcon className="h-7 w-7" aria-hidden />
                        </button>
                    </>
                )}
            </div>
            <section className="mt-8">
                <motion.ul
                    className="flex gap-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    initial="hidden"
                    animate="show"
                >
                    {product.images.thumbnails.map((_, idx) => (
                        <motion.li
                            key={idx + 1}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5 },
                                show: { opacity: 1, scale: 1 },
                            }}
                        >
                            <button
                                type="button"
                                aria-label={`product image ${idx + 1}`}
                                className={`bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange rounded-xl${
                                    idx + 1 === activeImage
                                        ? " border-2 border-orange"
                                        : ""
                                }`}
                                onClick={() => setActiveImage(idx + 1)}
                            >
                                <img
                                    src={`./images/image-product-${
                                        idx + 1
                                    }-thumbnail.jpg`}
                                    alt=""
                                    className={`transition-opacity duration-300 hover:opacity-30 rounded-xl${
                                        idx + 1 === activeImage
                                            ? " opacity-30"
                                            : ""
                                    }`}
                                />
                            </button>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </>
    );
}

export default ImagePanel;
