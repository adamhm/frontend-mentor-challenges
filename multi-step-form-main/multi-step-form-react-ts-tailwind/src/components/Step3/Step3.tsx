import { AddonCard, NavigationBar, StepTitleBar } from "@components";
import prices from "@data/prices.json";

function Step3() {
    return (
        <div className="flex h-full flex-col">
            <StepTitleBar
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <div className="mt-[34px]">
                <AddonCard
                    title="Online service"
                    subtitle="Access to multiplayer games"
                    text={`+$${prices.onlineService.monthly}/mo`}
                    active
                />
                <AddonCard
                    title="Larger storage"
                    subtitle="Extra 1TB of cloud save"
                    text={`+$${prices.largerStorage.monthly}/mo`}
                    active
                />
                <AddonCard
                    title="Customizable profile"
                    subtitle="Custom theme on your profile"
                    text={`+$${prices.customProfile.monthly}/mo`}
                    active={false}
                />
            </div>
            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
            />
        </div>
    );
}

export default Step3;
