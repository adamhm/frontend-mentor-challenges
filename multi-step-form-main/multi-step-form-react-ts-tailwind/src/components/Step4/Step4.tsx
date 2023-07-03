import { useContext } from "react";
import { NavigationBar, StepContent, StepTitleBar } from "@components";
import { FormContext, StepContext } from "@contexts";
import { addons as addonData, plans as planData } from "@data/data.json";
import { Addon } from "@typedefs";
import objectKeys from "@utils/object-keys";

function Step4() {
    const {
        state: { addons, plan, billing },
    } = useContext(FormContext);
    const { activeStep, setActiveStep } = useContext(StepContext);

    const priceSuffix = billing === "monthly" ? "mo" : "yr";

    const planPrice = planData[plan][billing];
    const addonPrice = Object.entries(addons)
        .filter(([, selected]) => selected)
        .reduce(
            (total, [addon]) => total + addonData[addon as Addon][billing],
            0
        );
    const totalPrice = planPrice + addonPrice;

    const primaryClickHandler = () => setActiveStep?.(activeStep + 1);

    const secondaryClickHandler = () => setActiveStep?.(activeStep - 1);

    return (
        <>
            <StepContent>
                <StepTitleBar
                    title="Finishing up"
                    subtitle="Double-check everything looks OK before confirming."
                />
                <div className="mt-[24px] rounded-md bg-ghost-white p-5 pb-2 md:mt-[40px] md:pb-5">
                    <div>
                        <div className="flex pb-2 md:pb-4">
                            <div>
                                <p className="text-[15px] font-bold text-marine-blue md:text-[17px]">
                                    {`${plan} (${billing})`}
                                </p>
                                <button
                                    type="button"
                                    className="block text-[15px] font-medium text-cool-gray underline"
                                    onClick={() => setActiveStep?.(2)}
                                >
                                    Change
                                </button>
                            </div>
                            <p className="ml-auto self-center text-[16px] font-bold text-marine-blue md:text-[17px]">
                                {`$${planData[plan][billing]}/${priceSuffix}`}
                            </p>
                        </div>
                        <hr />
                        <ul className=" pt-2 md:pt-4">
                            {objectKeys(addons).map(
                                (addon) =>
                                    addons[addon] && (
                                        <li
                                            key={addon}
                                            className="mb-2 flex text-[15px] md:mb-4"
                                        >
                                            <p className="text-cool-gray">
                                                {addon}
                                            </p>
                                            <p className="ml-auto font-medium text-marine-blue">
                                                {`+$${addonData[addon][billing]}/${priceSuffix}`}
                                            </p>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
                <div className="my-6 flex items-center px-[20px]">
                    <p className="text-[15px] text-cool-gray">{`Total (per ${
                        billing === "monthly" ? "month" : "year"
                    })`}</p>
                    <p className="ml-auto text-[17px] font-bold text-purplish-blue md:text-[21px]">
                        {`$${totalPrice}/${priceSuffix}`}
                    </p>
                </div>
            </StepContent>

            <NavigationBar
                primaryText="Confirm"
                colorClass="bg-purplish-blue"
                hoverColorClass="hover:bg-violets-are-blue"
                onPrimaryClick={primaryClickHandler}
                onSecondaryClick={secondaryClickHandler}
            />
        </>
    );
}

export default Step4;
