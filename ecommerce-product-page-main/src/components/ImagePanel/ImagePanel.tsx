import { useState } from "react";
import type { Product } from "@typedefs";

type ImagePanelProps = {
    product: Product;
};

function ImagePanel({ product }: ImagePanelProps) {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <section className="w-6/12 pl-12 pr-[62px]">
            <img
                src={`./images/image-product-${activeImage}.jpg`}
                alt=""
                className="rounded-xl"
            />
            <section className="mt-8">
                <ul className="flex gap-8">
                    {product.images.thumbnails.map((_, idx) => (
                        <li key={idx + 1}>
                            <button
                                type="button"
                                aria-label={`product image ${idx + 1}`}
                                className={`rounded-xl${
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
                                    className={`hover:opacity-30 rounded-xl${
                                        idx + 1 === activeImage
                                            ? " opacity-30"
                                            : ""
                                    }`}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default ImagePanel;
