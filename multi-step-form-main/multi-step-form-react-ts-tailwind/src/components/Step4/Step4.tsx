import { useContext } from "react";
import { NavigationBar, StepTitleBar } from "@components";
import FormContext from "@contexts/form-context";
import prices from "@data/prices.json";
import { Addon } from "@typedefs";
import objectKeys from "@utils/object-keys";

function Step4() {
    const { state } = useContext(FormContext);
    const priceSuffix = state.billing === "monthly" ? "mo" : "yr";

    const planPrice = prices.plans[state.plan][state.billing];
    const addonPrice = Object.entries(state.addons)
        .filter(([, selected]) => selected)
        .reduce(
            (total, [addon]) =>
                total + prices.addons[addon as Addon][state.billing],
            0
        );
    const totalPrice = planPrice + addonPrice;

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
                                {`${state.plan} (${state.billing})`}
                            </p>
                            <button
                                type="button"
                                className="block text-[15px] font-medium text-cool-gray underline"
                            >
                                Change
                            </button>
                        </div>
                        <p className="ml-auto text-[17px] font-bold text-marine-blue">
                            {`$${
                                prices.plans[state.plan][state.billing]
                            }/${priceSuffix}`}
                        </p>
                    </div>
                    <hr />
                    <ul className="pt-[16px]">
                        {objectKeys(state.addons).map(
                            (addon) =>
                                state.addons[addon] && (
                                    <li className="mb-4 flex text-[15px]">
                                        <p className="text-cool-gray">
                                            {addon}
                                        </p>
                                        <p className="ml-auto font-medium text-marine-blue">
                                            {`+$${
                                                prices.addons[addon][
                                                    state.billing
                                                ]
                                            }/${priceSuffix}`}
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
                colorClass="bg-purplish-blue"
                hoverColorClass="hover:bg-violets-are-blue"
            />
        </div>
    );
}

export default Step4;
