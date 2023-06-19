import exhaustiveCheck from "@utils/exhaustive-check";
import { FormState, FormAction } from "@typedefs";

function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "ADD_ADDON":
            return {
                ...state,
                addons: { ...state.addons, [action.payload]: true },
            };
        case "REMOVE_ADDON":
            return {
                ...state,
                addons: { ...state.addons, [action.payload]: false },
            };
        case "SET_ADDON":
            return {
                ...state,
                addons: {
                    ...state.addons,
                    [action.payload.addon]: action.payload.selected,
                },
            };
        case "SET_BILLING":
            return { ...state, billing: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_PHONE":
            return { ...state, phone: action.payload };
        case "SET_PLAN":
            return { ...state, plan: action.payload };
        default:
            return exhaustiveCheck(action);
    }
}

export default formReducer;
