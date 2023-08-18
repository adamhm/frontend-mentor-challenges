import productImage from "@assets/image-product-1.jpg";
import thumbnail1 from "@assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "@assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "@assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "@assets/image-product-4-thumbnail.jpg";

function ImagePanel() {
    return (
        <section className="w-6/12 pl-12 pr-[62px]">
            <img src={productImage} alt="" className="rounded-xl" />
            <section className="mt-8">
                <ul className="flex gap-8">
                    <li>
                        <button
                            type="button"
                            aria-label="Product image 1"
                            className="rounded-xl border-2 border-orange"
                        >
                            <img
                                src={thumbnail1}
                                alt=""
                                className="rounded-xl opacity-30"
                            />
                        </button>
                    </li>
                    <li>
                        <button type="button" aria-label="Product image 2">
                            <img
                                src={thumbnail2}
                                alt=""
                                className="rounded-xl"
                            />
                        </button>
                    </li>
                    <li>
                        <button type="button" aria-label="Product image 3">
                            <img
                                src={thumbnail3}
                                alt=""
                                className="rounded-xl"
                            />
                        </button>
                    </li>
                    <li>
                        <button type="button" aria-label="Product image 4">
                            <img
                                src={thumbnail4}
                                alt=""
                                className="rounded-xl"
                            />
                        </button>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default ImagePanel;
