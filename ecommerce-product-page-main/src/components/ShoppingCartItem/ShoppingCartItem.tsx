import type { CartItem } from "@typedefs";
import { getPrice, getTotal } from "@utils/prices";

import { ReactComponent as DeleteButton } from "@assets/icon-delete.svg";

type ShoppingCartItemProps = {
    item: CartItem;
};

function ShoppingCartItem({
    item: {
        product: {
            name,
            price,
            discount,
            images: { thumbnails },
        },
        quantity,
    },
}: ShoppingCartItemProps) {
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
            >
                <DeleteButton />
            </button>
        </li>
    );
}

export default ShoppingCartItem;
