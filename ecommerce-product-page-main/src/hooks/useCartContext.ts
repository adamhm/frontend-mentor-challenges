import { useContext } from "react";
import { CartContext } from "@contexts";

function useCartContext() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("Missing Cart Context");
    }

    return context;
}

export default useCartContext;
