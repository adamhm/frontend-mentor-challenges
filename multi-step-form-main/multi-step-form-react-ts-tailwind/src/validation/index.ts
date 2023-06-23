import { UserData } from "@typedefs";
import validate from "./validate";
import NotBlankValidator from "./not-blank-validator";
import EmailValidator from "./email-validator";
import PhoneValidator from "./phone-validator";

interface Validator {
    isValid(): boolean;
    getError(): string | null;
}

interface ValidatorConstructor {
    new (value: string): Validator;
}

type ValidationError = { [K in keyof UserData]: string | null };

export { validate, NotBlankValidator, EmailValidator, PhoneValidator };

export type { Validator, ValidatorConstructor, ValidationError };
