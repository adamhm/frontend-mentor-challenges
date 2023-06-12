import { NavigationBar, StepTitleBar } from "@components";

function Step4() {
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
                                Arcade (Monthly)
                            </p>
                            <button
                                type="button"
                                className="block text-[15px] font-medium text-cool-gray underline"
                            >
                                Change
                            </button>
                        </div>
                        <p className="ml-auto text-[17px] font-bold text-marine-blue">
                            $9/mo
                        </p>
                    </div>
                    <hr />
                    <ul className="pt-[16px]">
                        <li className="mb-4 flex text-[15px]">
                            <p className="text-cool-gray">Online Service</p>
                            <p className="ml-auto font-medium text-marine-blue">
                                +$1/mo
                            </p>
                        </li>
                        <li className="flex text-[15px]">
                            <p className="text-cool-gray">Larger storage</p>
                            <p className="ml-auto font-medium text-marine-blue">
                                +$2/mo
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-6 flex items-center px-[20px]">
                <p className="text-[15px] text-cool-gray">Total (per month)</p>
                <p className="ml-auto text-[21px] font-bold text-purplish-blue">
                    +$12/mo
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
