import { useContext } from "react";
import FormContext from "@contexts/form-context";
import {
    NavigationBar,
    PlanCard,
    StepTitleBar,
    ToggleButton,
} from "@components";
import data from "@data/data.json";
import objectKeys from "@utils/object-keys";

function Step2() {
    const { state, dispatch } = useContext(FormContext);

    const priceSuffix = state.billing === "monthly" ? "mo" : "yr";

    const handleBillingChange = (billing: "monthly" | "yearly") =>
        dispatch?.({ type: "SET_BILLING", payload: billing });

    return (
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div className="mt-[34px] flex gap-[18px]">
                {objectKeys(data.plans).map((plan) => (
                    <PlanCard
                        image={`/src/assets/images/${data.plans[plan].image}`}
                        title={plan}
                        subtitle={`$${
                            data.plans[plan][state.billing]
                        }/${priceSuffix}`}
                        note={
                            state.billing === "yearly"
                                ? data.plans[plan].note
                                : undefined
                        }
                        active={state.plan === plan}
                    />
                ))}
            </div>
            <div className="mt-9 flex h-[3rem] items-center justify-center bg-ghost-white">
                <ToggleButton
                    state={state.billing}
                    onChange={handleBillingChange}
                />
            </div>
            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
            />
        </div>
    );
}

export default Step2;
