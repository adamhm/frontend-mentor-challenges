import { useContext } from "react";
import { NavigationBar, StepTitleBar } from "@components";
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
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />
            <div className="mt-[40px] rounded-md bg-ghost-white p-[20px]">
                <div>
                    <div className="flex pb-[16px]">
                        <div>
                            <p className="text-[17px] font-bold text-marine-blue">
                                {`${plan} (${billing})`}
                            </p>
                            <button
                                type="button"
                                className="block text-[15px] font-medium text-cool-gray underline"
                            >
                                Change
                            </button>
                        </div>
                        <p className="ml-auto text-[17px] font-bold text-marine-blue">
                            {`$${planData[plan][billing]}/${priceSuffix}`}
                        </p>
                    </div>
                    <hr />
                    <ul className="pt-[16px]">
                        {objectKeys(addons).map(
                            (addon) =>
                                addons[addon] && (
                                    <li
                                        key={addon}
                                        className="mb-4 flex text-[15px]"
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

            <div className="mt-6 flex items-center px-[20px]">
                <p className="text-[15px] text-cool-gray">Total (per month)</p>
                <p className="ml-auto text-[21px] font-bold text-purplish-blue">
                    {`$${totalPrice}/${priceSuffix}`}
                </p>
            </div>
            <NavigationBar
                primaryText="Confirm"
                colorClass="bg-purplish-blue"
                hoverColorClass="hover:bg-violets-are-blue"
                onPrimaryClick={primaryClickHandler}
                onSecondaryClick={secondaryClickHandler}
            />
        </div>
    );
}

export default Step4;
