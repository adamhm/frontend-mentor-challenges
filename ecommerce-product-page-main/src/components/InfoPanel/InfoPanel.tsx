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
        <section className="flex w-6/12 flex-col justify-center pl-[62px] pr-12">
            <p className="text-[13px] font-bold uppercase text-orange">
                {company}
            </p>
            <h1 className="mt-6 text-[44px] font-bold leading-[44px]">
                {name}
            </h1>
            <p className="mt-10 text-gray-500">{description}</p>
            <p className="mt-6 flex items-center text-[30px] font-bold">
                ${((price * discount) / 100).toFixed(2)}
                <span className="ml-4 rounded-md bg-pale-orange px-2 py-1 text-sm text-orange">{`${discount}%`}</span>
            </p>
            <p className="mt-1 text-[15px] font-bold text-gray-300 line-through">{`$${price.toFixed(
                2
            )}`}</p>
            <div className="mt-8 flex">
                <QuantitySelector
                    value={quantity}
                    onMinusClick={decreaseQuantity}
                    onPlusClick={increaseQuantity}
                />
                <button
                    type="button"
                    disabled={quantity === 0}
                    onClick={addButtonClickHandler}
                    className="ml-5 flex h-[54px] w-[270px] items-center justify-center rounded-xl bg-orange font-bold text-white shadow-[0px_44px_20px_-12px_hsla(26,100%,55%,15%)] hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <CartIcon className="mr-3" fill="white" />
                    Add to cart
                </button>
            </div>
        </section>
    );
}

export default InfoPanel;
