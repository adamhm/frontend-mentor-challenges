import { PlanCard, StepTitleBar, ToggleButton } from "@components";
import arcadeIcon from "@assets/images/icon-arcade.svg";
import advancedIcon from "@assets/images/icon-advanced.svg";
import proIcon from "@assets/images/icon-pro.svg";
import prices from "@data/prices.json";

function Step2() {
    return (
        <div>
            <StepTitleBar
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div className="mt-[34px] flex gap-[18px]">
                <PlanCard
                    image={arcadeIcon}
                    title="Arcade"
                    subtitle={`$${prices.arcade.monthly}/mo`}
                    note={prices.arcade.note}
                />
                <PlanCard
                    image={advancedIcon}
                    title="Advanced"
                    subtitle={`$${prices.advanced.monthly}/mo`}
                    note={prices.advanced.note}
                />
                <PlanCard
                    image={proIcon}
                    title="Pro"
                    subtitle={`$${prices.pro.monthly}/mo`}
                    note={prices.pro.note}
                />
            </div>
            <div className="mt-9 flex h-[3rem] items-center justify-center bg-[#f8f9fe]">
                <ToggleButton state="monthly" />
            </div>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="mt-[92px] block h-[48px] w-[124px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue"
                >
                    Go Back
                </button>
                <button
                    type="button"
                    className="mt-[92px] block h-[48px] w-[124px] rounded-md bg-marine-blue text-white hover:bg-[#174a8b]"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
}

export default Step2;
