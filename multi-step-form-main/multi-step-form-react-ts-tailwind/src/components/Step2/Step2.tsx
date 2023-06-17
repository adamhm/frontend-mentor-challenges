import { useContext } from "react";
import FormContext from "@contexts/form-context";
import {
    NavigationBar,
    PlanCard,
    StepTitleBar,
    ToggleButton,
} from "@components";
import prices from "@data/prices.json";
import objectKeys from "@utils/object-keys";

function Step2() {
    const { state } = useContext(FormContext);

    const priceSuffix = state.billing === "monthly" ? "mo" : "yr";

    return (
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div className="mt-[34px] flex gap-[18px]">
                {objectKeys(prices.plans).map((plan) => (
                    <PlanCard
                        image={`/src/assets/images/${prices.plans[plan].image}`}
                        title={plan}
                        subtitle={`$${
                            prices.plans[plan][state.billing]
                        }/${priceSuffix}`}
                        note={prices.plans[plan].note}
                        active={state.plan === plan}
                    />
                ))}
            </div>
            <div className="mt-9 flex h-[3rem] items-center justify-center bg-ghost-white">
                <ToggleButton state="monthly" />
            </div>
            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
            />
        </div>
    );
}

export default Step2;
