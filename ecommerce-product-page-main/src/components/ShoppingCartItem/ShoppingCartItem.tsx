import type { CartItem } from "@typedefs";
import { getPrice, getTotal } from "@utils/prices";

import deleteIcon from "@assets/icon-delete.svg";
import useCartContext from "@hooks/useCartContext";

type ShoppingCartItemProps = {
    item: CartItem;
};

function ShoppingCartItem({
    item: {
        product: {
            id,
            name,
            price,
            discount,
            images: { thumbnails },
        },
        quantity,
    },
}: ShoppingCartItemProps) {
    const { dispatch } = useCartContext();

    return (
        <li className="my-6 flex justify-between px-6">
            <img
                src={`./images/${thumbnails[0]}`}
                alt=""
                className="h-12 w-12 rounded-md"
            />
            <div>
                <p>{name}</p>
                <p>
                    {`$${getPrice(price, discount).toFixed(2)} x ${quantity}`}{" "}
                    <strong>
                        ${getTotal(price, discount, quantity).toFixed(2)}
                    </strong>
                </p>
            </div>
            <button
                type="button"
                aria-label="remove this item from the cart"
                title="remove"
                data-role="remove-item"
                onClick={() => dispatch({ type: "REMOVE", payload: id })}
            >
                <img src={deleteIcon} alt="" />
            </button>
        </li>
    );
}

export default ShoppingCartItem;
