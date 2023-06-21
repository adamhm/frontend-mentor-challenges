import { useContext } from "react";
import { AddonCard, NavigationBar, StepTitleBar } from "@components";
import data from "@data/data.json";
import { FormContext, StepContext } from "@contexts";
import objectKeys from "@utils/object-keys";
import { Addon } from "@typedefs";

function Step3() {
    const { state, dispatch } = useContext(FormContext);
    const { activeStep, setActiveStep } = useContext(StepContext);

    const priceSuffix = state.billing === "monthly" ? "mo" : "yr";

    const handleSelectedChange = (addon: Addon, selected: boolean) =>
        dispatch?.({
            type: "SET_ADDON",
            payload: { addon, selected },
        });

    const primaryClickHandler = () => setActiveStep?.(activeStep + 1);

    const secondaryClickHandler = () => setActiveStep?.(activeStep - 1);

    return (
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <div className="mt-[34px]">
                {objectKeys(data.addons).map((addon) => (
                    <AddonCard
                        key={addon}
                        title={addon}
                        subtitle={data.addons[addon].note}
                        text={`+$${
                            data.addons[addon][state.billing]
                        }/${priceSuffix}`}
                        active={state.addons[addon]}
                        onChange={(selected) =>
                            handleSelectedChange(addon, selected)
                        }
                    />
                ))}
            </div>
            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
                onPrimaryClick={primaryClickHandler}
                onSecondaryClick={secondaryClickHandler}
            />
        </div>
    );
}

export default Step3;
