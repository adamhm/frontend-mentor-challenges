import { useContext } from "react";
import { AddonCard, NavigationBar, StepTitleBar } from "@components";
import prices from "@data/prices.json";
import FormContext from "@contexts/form-context";
import objectKeys from "@utils/object-keys";

function Step3() {
    const { state } = useContext(FormContext);

    const priceSuffix = state.billing === "monthly" ? "mo" : "yr";

    return (
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <div className="mt-[34px]">
                {objectKeys(prices.addons).map((addon) => (
                    <AddonCard
                        title={addon}
                        subtitle={prices.addons[addon].note}
                        text={`+$${
                            prices.addons[addon][state.billing]
                        }/${priceSuffix}`}
                        active={state.addons[addon]}
                    />
                ))}
            </div>
            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
            />
        </div>
    );
}

export default Step3;
