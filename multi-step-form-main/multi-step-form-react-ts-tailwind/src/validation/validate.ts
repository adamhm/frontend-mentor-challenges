import { UserData } from "@typedefs";
import { NotBlankValidator, EmailValidator, PhoneValidator } from "@validation";

type Error = "This field is required" | "Invalid format" | null;

type ValidationError = { [K in keyof UserData]: Error };

function validate(userData: UserData): ValidationError {
    return {
        name:
            (!NotBlankValidator.validate(userData.name) &&
                "This field is required") ||
            null,
        email:
            (!NotBlankValidator.validate(userData.email) &&
                "This field is required") ||
            (!EmailValidator.validate(userData.email) && "Invalid format") ||
            null,
        phone:
            (!NotBlankValidator.validate(userData.phone) &&
                "This field is required") ||
            (!PhoneValidator.validate(userData.phone) && "Invalid format") ||
            null,
    };
}

export type { ValidationError };
export default validate;
