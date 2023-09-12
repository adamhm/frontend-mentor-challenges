import { ImagePanel } from "@components";
import { ReactComponent as CloseIcon } from "@assets/icon-close.svg";
import data from "@data/products.json";

type LightBoxProps = {
    initial: number;
    onClose?(): void;
};

function LightBox({ initial, onClose }: LightBoxProps) {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-75"
            aria-modal
        >
            <div className="mx-5 max-w-[550px]">
                <button
                    aria-label="close"
                    className="mb-6 ml-auto block text-white hover:text-orange"
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
        </div>
    );
}

export default LightBox;
