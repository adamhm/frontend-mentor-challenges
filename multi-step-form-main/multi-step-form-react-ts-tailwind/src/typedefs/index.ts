import data from "@data/data.json";

type Plan = keyof (typeof data)["plans"];

type Addon = keyof (typeof data)["addons"];

type AddonGroup = { [K in Addon]: boolean };

interface FormState {
    name: string;
    email: string;
    phone: string;
    plan: Plan;
    billing: "monthly" | "yearly";
    addons: AddonGroup;
}

type FormAction =
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_PHONE"; payload: string }
    | { type: "SET_PLAN"; payload: Plan }
    | { type: "SET_BILLING"; payload: "monthly" | "yearly" }
    | { type: "ADD_ADDON"; payload: Addon }
    | { type: "REMOVE_ADDON"; payload: Addon };

export type { Addon, Plan, FormState, FormAction };
