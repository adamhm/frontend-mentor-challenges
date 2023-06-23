/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useContext, useId, useState } from "react";
import { StepTitleBar } from "@components";
import { FormContext, StepContext } from "@contexts";
import { validate, ValidationError } from "@validation";
import { UserData } from "@typedefs";

function Step1() {
    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();
    const { state, dispatch } = useContext(FormContext);
    const { activeStep, setActiveStep } = useContext(StepContext);
    const [userData, setUserData] = useState<UserData>({
        name: state.userData.name,
        email: state.userData.email,
        phone: state.userData.phone,
    });
    const [errors, setErrors] = useState<ValidationError>({
        name: null,
        email: null,
        phone: null,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setUserData((inputData) => ({
            ...inputData,
            [e.target.name]: e.target.value,
        }));

    const handleClick = () => {
        const errorMessages = validate(userData);
        const noError =
            !errorMessages.name && !errorMessages.email && !errorMessages.phone;

        if (noError) {
            dispatch?.({
                type: "SET_USER_DATA",
                payload: {
                    name: userData.name.trim(),
                    email: userData.email.trim(),
                    phone: userData.phone.trim(),
                },
            });
            setActiveStep?.(activeStep + 1);
        } else {
            setErrors(errorMessages);
        }
    };

    return (
        <div>
            <StepTitleBar
                title="Personal info"
                subtitle="Please provide your name, email address, and phone number."
            />
            <form action="" className="mt-[34px]">
                <div className="flex font-medium">
                    <label htmlFor={nameId} className="text-marine-blue">
                        Name
                    </label>
                    {errors.name && (
                        <span className="ml-auto text-red-600">
                            {errors.name}
                        </span>
                    )}
                </div>
                <input
                    id={nameId}
                    name="name"
                    type="text"
                    placeholder="e.g. Stephen King"
                    className={`mt-1 block h-[3rem] w-full rounded-lg border p-4 placeholder:font-medium ${
                        errors.name ? "border-red-600" : "border-gray-300"
                    }`}
                    value={userData.name}
                    onChange={handleInputChange}
                />
                <div className="mt-5 flex font-medium">
                    <label htmlFor={emailId}>Email Address</label>
                    {errors.email && (
                        <span className="ml-auto text-red-600">
                            {errors.email}
                        </span>
                    )}
                </div>
                <input
                    id={emailId}
                    name="email"
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    className={`mt-1 block h-[3rem] w-full rounded-lg border p-4 placeholder:font-medium ${
                        errors.email ? "border-red-600" : "border-gray-300"
                    }`}
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <div className="mt-5 flex font-medium">
                    <label htmlFor={phoneId}>Phone Number</label>
                    {errors.phone && (
                        <span className="ml-auto text-red-600">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <input
                    id={phoneId}
                    name="phone"
                    type="text"
                    placeholder="e,g, +1 234 567 890"
                    className={`mt-1 block h-[3rem] w-full rounded-lg border p-4 placeholder:font-medium ${
                        errors.phone ? "border-red-600" : "border-gray-300"
                    }`}
                    value={userData.phone}
                    onChange={handleInputChange}
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
