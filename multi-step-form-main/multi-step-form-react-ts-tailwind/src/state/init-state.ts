import { FormState } from "@typedefs";

const initState: FormState = {
    userData: {
        name: "",
        email: "",
        phone: "",
    },
    plan: "Arcade",
    billing: "monthly",
    addons: {
        "Online service": true,
        "Larger storage": true,
        "Customizable profile": false,
    },
};

export default initState;
