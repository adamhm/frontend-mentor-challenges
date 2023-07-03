import { useContext } from "react";
import {
    AddonCard,
    NavigationBar,
    StepContent,
    StepTitleBar,
} from "@components";
import { addons as addonData } from "@data/data.json";
import { FormContext, StepContext } from "@contexts";
import objectKeys from "@utils/object-keys";
import { Addon } from "@typedefs";

function Step3() {
    const {
        state: { addons, billing },
        dispatch,
    } = useContext(FormContext);
    const { activeStep, setActiveStep } = useContext(StepContext);

    const priceSuffix = billing === "monthly" ? "mo" : "yr";

    const handleSelectedChange = (addon: Addon, selected: boolean) =>
        dispatch?.({
            type: "SET_ADDON",
            payload: { addon, selected },
        });

    const primaryClickHandler = () => setActiveStep?.(activeStep + 1);

    const secondaryClickHandler = () => setActiveStep?.(activeStep - 1);

    return (
        <>
            <StepContent>
                <StepTitleBar
                    title="Pick add-ons"
                    subtitle="Add-ons help enhance your gaming experience."
                />
                <div className="mt-[24px] md:mt-[40px]">
                    {objectKeys(addonData).map((addon) => (
                        <AddonCard
                            key={addon}
                            title={addon}
                            subtitle={addonData[addon].note}
                            text={`+$${addonData[addon][billing]}/${priceSuffix}`}
                            active={addons[addon]}
                            onChange={(selected) =>
                                handleSelectedChange(addon, selected)
                            }
                        />
                    ))}
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

export default Step3;
