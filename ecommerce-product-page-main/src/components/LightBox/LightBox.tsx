import { forwardRef } from "react";
import { ImagePanel } from "@components";
import { ReactComponent as CloseIcon } from "@assets/icon-close.svg";
import data from "@data/products.json";

type LightBoxProps = {
    initial: number;
    onClose?(): void;
};

const LightBox = forwardRef(function (
    { initial, onClose }: LightBoxProps,
    ref: React.ForwardedRef<HTMLDialogElement>
) {
    return (
        <dialog
            className="bg-transparent backdrop:bg-black backdrop:bg-opacity-75"
            ref={ref}
        >
            <div className="max-w-[550px] bg-transparent px-8">
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
        </dialog>
    );
});

export default LightBox;
