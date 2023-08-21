import type { CartAction, CartState } from "@typedefs";

function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
        case "ADD":
            return { ...state, items: [...state.items, action.payload] };
        case "REMOVE":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.product.id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default cartReducer;
