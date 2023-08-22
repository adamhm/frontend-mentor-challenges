import type { CartAction, CartState } from "@typedefs";

function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
        case "ADD":
            const itemIndex = state.items.findIndex(
                (item) => item.product.id === action.payload.product.id
            );

            if (itemIndex > -1) {
                const newItem = {
                    product: state.items[itemIndex].product,
                    quantity:
                        state.items[itemIndex].quantity +
                        action.payload.quantity,
                };

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        newItem,
                        ...state.items.slice(itemIndex + 1),
                    ],
                };
            }

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
