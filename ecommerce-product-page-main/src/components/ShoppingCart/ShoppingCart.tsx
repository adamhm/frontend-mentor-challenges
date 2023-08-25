import { ShoppingCartItem } from "@components";
import useCartContext from "@hooks/useCartContext";

function ShoppingCart() {
    const { state } = useCartContext();

    return (
        <section className="absolute w-[360px] -translate-x-1/2 translate-y-8 rounded-xl border bg-white">
            <header className="border-b border-gray-200 px-6">
                <h2 className="py-7 font-bold text-black">Cart</h2>
            </header>
            {state.items.length === 0 && (
                <p className="flex h-[188px] items-center justify-center font-bold">
                    Your cart is empty.
                </p>
            )}
            {state.items.length > 0 && (
                <>
                    <ul>
                        {state.items.map((item) => (
                            <ShoppingCartItem
                                item={item}
                                key={item.product.id}
                            />
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="mx-6 mb-8 h-[54px] w-[312px] rounded-xl bg-orange font-bold text-white hover:opacity-60"
                    >
                        Checkout
                    </button>
                </>
            )}
        </section>
    );
}

export default ShoppingCart;
