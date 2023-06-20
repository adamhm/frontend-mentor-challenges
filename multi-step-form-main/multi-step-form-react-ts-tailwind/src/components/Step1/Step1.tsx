/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useId } from "react";
import { StepTitleBar } from "@components";
import { StepContext } from "@contexts";

function Step1() {
    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();
    const { activeStep, setActiveStep } = useContext(StepContext);

    const handleClick = () => {
        setActiveStep?.(activeStep + 1);
    };

    return (
        <div>
            <StepTitleBar
                title="Personal info"
                subtitle="Please provide your name, email address, and phone number."
            />
            <form action="" className="mt-[34px]">
                <label
                    htmlFor={nameId}
                    className="block font-medium text-marine-blue"
                >
                    Name
                </label>
                <input
                    id={nameId}
                    name="name"
                    type="text"
                    placeholder="e.g. Stephen King"
                    className="mt-1 block h-[3rem] w-full rounded-lg border border-gray-300 p-4 placeholder:font-medium"
                />
                <label htmlFor={emailId} className="mt-5 block font-medium">
                    Email Address
                </label>
                <input
                    id={emailId}
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    className="mt-1 block h-[3rem] w-full rounded-lg border border-gray-300 p-4 placeholder:font-medium"
                />
                <label htmlFor={phoneId} className="mt-5 block font-medium">
                    Phone Number
                </label>
                <input
                    id={phoneId}
                    type="text"
                    placeholder="e,g, +1 234 567 890"
                    className="mt-1 block h-[3rem] w-full rounded-lg border border-gray-300 p-4 placeholder:font-medium"
                />
            </form>
            <button
                type="button"
                className="ml-auto mt-[92px] block h-[48px] w-[124px] rounded-md bg-marine-blue text-white hover:bg-[#174a8b]"
                onClick={handleClick}
            >
                Next Step
            </button>
        </div>
    );
}

export default Step1;
