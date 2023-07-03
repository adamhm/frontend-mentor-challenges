import { useContext } from "react";
import { AddonCard, NavigationBar, StepTitleBar } from "@components";
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
        <div className="flex h-full flex-col">
            <div className=" px-[1rem] md:px-0">
                <div className="mb-[24px] rounded-2xl border border-white bg-white px-[24px] pb-[1px] pt-[28px] shadow-xl md:h-[376px] md:px-0 md:pt-0 md:shadow-none">
                    <StepTitleBar
                        title="Pick add-ons"
                        subtitle="Add-ons help enhance your gaming experience."
                    />
                    <div className="mt-[34px]">
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
                </div>
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
