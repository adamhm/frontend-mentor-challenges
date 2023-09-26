import { useCallback, useState } from "react";

import type { Product } from "@typedefs";
import { QuantitySelector } from "@components";
import useCartContext from "@hooks/useCartContext";

import { ReactComponent as CartIcon } from "@assets/icon-cart.svg";

type InfoPanelProps = {
    product: Product;
};

function InfoPanel({
    product,
    product: { company, name, description, price, discount },
}: InfoPanelProps) {
    const [quantity, setQuantity] = useState(0);

    const { dispatch } = useCartContext();

    const decreaseQuantity = useCallback(
        () => setQuantity((prevValue) => (prevValue === 0 ? 0 : prevValue - 1)),
        [setQuantity]
    );

    const increaseQuantity = useCallback(
        () =>
            setQuantity((prevValue) => (prevValue === 99 ? 99 : prevValue + 1)),
        [setQuantity]
    );

    const addButtonClickHandler = () => {
        dispatch({
            type: "ADD",
            payload: { product, quantity },
        });

        setQuantity(0);
    };

    return (
        <>
            <p className="mt-6 text-[13px] font-bold uppercase text-orange md:mt-0">
                {company}
            </p>
            <h1 className="mt-3 text-[28px] font-bold leading-[28px] md:mt-6 md:text-[44px] md:leading-[44px]">
                {name}
            </h1>
            <p className="mb-6 mt-6 text-gray-500 md:mt-10">{description}</p>
            <div className="flex flex-row justify-between md:flex-col">
                <p className="flex items-center text-[30px] font-bold">
                    ${((price * discount) / 100).toFixed(2)}
                    <span className="ml-4 rounded-md bg-pale-orange px-2 py-1 text-sm text-orange">{`${discount}%`}</span>
                </p>
                <p className="flex items-center text-[15px] font-bold text-gray-300 line-through md:mt-1">{`$${price.toFixed(
                    2
                )}`}</p>
            </div>
            <div className="mb:mt-8 mt-5 flex flex-col md:flex-row">
                <QuantitySelector
                    value={quantity}
                    onMinusClick={decreaseQuantity}
                    onPlusClick={increaseQuantity}
                />
                <button
                    type="button"
                    disabled={quantity === 0}
                    onClick={addButtonClickHandler}
                    className="mb-[90px] mt-4 flex h-[54px] items-center justify-center rounded-xl bg-orange font-bold text-white shadow-[0px_44px_20px_-12px_hsla(26,100%,55%,15%)] transition-opacity duration-300 hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-60 md:mb-0 md:ml-5 md:mt-0 md:w-[270px]"
                >
                    <CartIcon className="mr-3" fill="white" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default InfoPanel;
