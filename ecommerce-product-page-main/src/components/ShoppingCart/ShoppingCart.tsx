import { ShoppingCartItem } from "@components";
import useCartContext from "@hooks/useCartContext";

function ShoppingCart() {
    const { state } = useCartContext();

    return (
        <section className="absolute inset-x-2 top-[4.75rem] z-20 rounded-xl border bg-white md:inset-x-auto md:top-auto md:w-[360px] md:-translate-x-[calc(100%-22px)] md:translate-y-8 xl:-translate-x-1/2">
            <header className="border-b border-gray-200 px-6">
                <h2 className="py-[22px] font-bold text-black md:py-7">Cart</h2>
            </header>
            {state.items.length === 0 && (
                <p className="flex h-[188px] items-center justify-center font-bold">
                    Your cart is empty.
                </p>
            )}
            {state.items.length > 0 && (
                <div className="px-6">
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
                        className="mb-8 block h-[54px] w-full rounded-xl bg-orange font-bold text-white transition-opacity duration-300 hover:opacity-60 md:w-[312px]"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </section>
    );
}

export default ShoppingCart;
