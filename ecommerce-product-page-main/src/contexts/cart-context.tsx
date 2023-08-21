import { createContext, useReducer } from "react";

import type { CartContextType } from "@typedefs";
import cartReducer from "@state/cart-reducer";

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
