import { ChangeEvent, useContext, useId, useState } from "react";
import {
    InputGroup,
    NavigationBar,
    StepTitleBar,
    StepContent,
} from "@components";
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

    return (
        <>
            <StepContent>
                <StepTitleBar
                    title="Personal info"
                    subtitle="Please provide your name, email address, and phone number."
                />
                <form action="" className="mb-8 mt-[16px] md:mt-[34px]">
                    <InputGroup
                        id={nameId}
                        name="name"
                        type="text"
                        required
                        label="Name"
                        placeholder="e.g. Stephen King"
                        error={errors.name}
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    <InputGroup
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        label="Email Address"
                        placeholder="e.g. stephenking@lorem.com"
                        error={errors.email}
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <InputGroup
                        id={phoneId}
                        name="phone"
                        type="tel"
                        required
                        label="Phone Number"
                        placeholder="e,g, +1 234 567 890"
                        error={errors.phone}
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
