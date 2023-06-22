import { addons, plans } from "@data/data.json";

type Plan = keyof typeof plans;

type Addon = keyof typeof addons;

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
    | {
          type: "SET_USER_DATA";
          payload: {
              name: string;
              email: string;
              phone: string;
          };
      }
    | { type: "SET_PLAN"; payload: Plan }
    | { type: "SET_BILLING"; payload: "monthly" | "yearly" }
    | { type: "ADD_ADDON"; payload: Addon }
    | { type: "REMOVE_ADDON"; payload: Addon }
    | { type: "SET_ADDON"; payload: { addon: Addon; selected: boolean } };

export type { Addon, Plan, FormState, FormAction };
