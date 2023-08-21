import { CartContext } from "@contexts";
import { useContext } from "react";

function useCartContext() {
    if (!CartContext) {
        throw new Error("Missing Cart Context");
    }

    return useContext(CartContext)!;
}

export default useCartContext;
