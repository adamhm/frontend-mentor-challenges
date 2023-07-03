/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useContext, useId, useState } from "react";
import { NavigationBar, StepTitleBar, StepContent } from "@components";
import { FormContext, StepContext } from "@contexts";
import {
    validate,
    ValidationError,
    NotBlankValidator,
    EmailValidator,
    PhoneValidator,
} from "@validation";
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
        const errorMessages = validate(userData, {
            name: [NotBlankValidator],
            email: [NotBlankValidator, EmailValidator],
            phone: [NotBlankValidator, PhoneValidator],
        });

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

    const inputClasses =
        "mt-1 block h-[40px] w-full rounded-lg border p-4 placeholder:font-medium md:h-[3rem]";

    return (
        <>
            <StepContent>
                <StepTitleBar
                    title="Personal info"
                    subtitle="Please provide your name, email address, and phone number."
                />
                <form action="" className="mb-8 mt-[16px] md:mt-[34px]">
                    <div className="flex text-[14px] font-medium md:text-[1rem]">
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
                        required
                        aria-invalid={!!errors.name}
                        placeholder="e.g. Stephen King"
                        className={`${inputClasses} ${
                            errors.name ? "border-red-600" : "border-gray-300"
                        }`}
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    <div className="mt-[12px] flex text-[14px] font-medium md:mt-5 md:text-[1rem]">
                        <label htmlFor={emailId} className="text-marine-blue">
                            Email Address
                        </label>
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
                        required
                        aria-invalid={!!errors.email}
                        placeholder="e.g. stephenking@lorem.com"
                        className={`${inputClasses} ${
                            errors.email ? "border-red-600" : "border-gray-300"
                        }`}
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <div className="mt-[12px] flex text-[14px] font-medium md:mt-5 md:text-[1rem]">
                        <label htmlFor={phoneId} className="text-marine-blue">
                            Phone Number
                        </label>
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
                        required
                        aria-invalid={!!errors.phone}
                        placeholder="e,g, +1 234 567 890"
                        className={`${inputClasses} ${
                            errors.phone ? "border-red-600" : "border-gray-300"
                        }`}
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </form>
            </StepContent>

            <NavigationBar
                colorClass="bg-marine-blue"
                hoverColorClass="hover:bg-[#174a8b]"
                onPrimaryClick={handleClick}
            />
        </>
    );
}

export default Step1;
