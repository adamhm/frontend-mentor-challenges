import { FormState } from "@typedefs";

type Data = Pick<FormState, "name" | "email" | "phone">;

type Error = "This field is required" | "Invalid format" | null;

type ValidationError = { [K in keyof Data]: Error };

const isMissing = (value: string) => value.trim() === "";
const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email.trim());
const isValidPhone = (phone: string) => /^\+\d+$/.test(phone.trim());

function validate(data: Data): ValidationError {
    return {
        name: (isMissing(data.name) && "This field is required") || null,
        email:
            (isMissing(data.email) && "This field is required") ||
            (!isValidEmail(data.email) && "Invalid format") ||
            null,
        phone:
            (isMissing(data.phone) && "This field is required") ||
            (!isValidPhone(data.phone) && "Invalid format") ||
            null,
    };
}

export type { ValidationError };
export default validate;
