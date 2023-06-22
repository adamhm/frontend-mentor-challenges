import exhaustiveCheck from "@utils/exhaustive-check";
import { FormState, FormAction } from "@typedefs";

function formReducer(
    state: FormState,
    { type, payload }: FormAction
): FormState {
    switch (type) {
        case "ADD_ADDON":
            return {
                ...state,
                addons: { ...state.addons, [payload]: true },
            };
        case "REMOVE_ADDON":
            return {
                ...state,
                addons: { ...state.addons, [payload]: false },
            };
        case "SET_ADDON":
            return {
                ...state,
                addons: {
                    ...state.addons,
                    [payload.addon]: payload.selected,
                },
            };
        case "SET_BILLING":
            return { ...state, billing: payload };
        case "SET_EMAIL":
            return { ...state, email: payload };
        case "SET_NAME":
            return { ...state, name: payload };
        case "SET_PHONE":
            return { ...state, phone: payload };
        case "SET_PLAN":
            return { ...state, plan: payload };
        case "SET_USER_DATA":
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
            };
        default:
            return exhaustiveCheck(type);
    }
}

export default formReducer;
