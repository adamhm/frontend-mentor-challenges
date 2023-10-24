import { useContext } from "react";
import { FormContext, StepContext } from "@contexts";
import {
    NavigationBar,
    PlanCard,
    StepContent,
    StepTitleBar,
    ToggleButton,
} from "@components";
import { plans as planData } from "@data/data.json";
import objectKeys from "@utils/object-keys";
import { Plan } from "@typedefs";

function Step2() {
    const {
        state,
        state: { billing },
        dispatch,
    } = useContext(FormContext);
    const { activeStep, setActiveStep } = useContext(StepContext);

    const priceSuffix = billing === "monthly" ? "mo" : "yr";

    const handleBillingChange = (period: "monthly" | "yearly") =>
        dispatch?.({ type: "SET_BILLING", payload: period });

    const handlePlanChange = (plan: Plan) =>
        dispatch?.({ type: "SET_PLAN", payload: plan });

    const primaryClickHandler = () => setActiveStep?.(activeStep + 1);

    const secondaryClickHandler = () => setActiveStep?.(activeStep - 1);

    return (
        <>
            <StepContent>
                <StepTitleBar
                    title="Select your plan"
                    subtitle="You have the option of monthly or yearly billing."
                />
                <div className="mt-[24px] flex flex-col gap-[12px] md:mt-[36px] md:flex-row md:gap-[18px]">
                    {objectKeys(planData).map((plan) => (
                        <PlanCard
                            key={plan}
                            image={`/fm/multi-step-form/assets/images/${planData[plan].image}`}
                            title={plan}
                            subtitle={`$${planData[plan][billing]}/${priceSuffix}`}
                            note={
                                billing === "yearly"
                                    ? planData[plan].note
                                    : undefined
                            }
                            active={state.plan === plan}
                            onClick={() => handlePlanChange(plan)}
                        />
                    ))}
                </div>
                <div className="my-6 flex h-[3rem] items-center justify-center bg-ghost-white md:mb-0 md:mt-9">
                    <ToggleButton
                        state={billing}
                        onChange={handleBillingChange}
                    />
                </div>
            </StepContent>

            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
                onPrimaryClick={primaryClickHandler}
                onSecondaryClick={secondaryClickHandler}
            />
        </>
    );
}

export default Step2;
