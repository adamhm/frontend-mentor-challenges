import data from "@data/products.json";

type Product = (typeof data.products)[number];

type CartItem = { product: Product; quantity: number };

type CartState = { items: Array<CartItem> };

type CartAction =
    | { type: "ADD"; payload: CartItem }
    | { type: "REMOVE"; payload: number };

type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};

export type { CartContextType, CartAction, CartState, Product, CartItem };
