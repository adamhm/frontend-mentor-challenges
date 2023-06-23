import { UserData } from "@typedefs";
import objectKeys from "@utils/object-keys";
import { ValidatorConstructor, ValidationError } from "@validation";

function validate(
    userData: UserData,
    validators: { [K in keyof UserData]: ValidatorConstructor[] }
): ValidationError {
    const result: Partial<ValidationError> = {};

    objectKeys(userData).forEach((key) => {
        for (let i = 0; i < validators[key].length; i += 1) {
            const validator = new validators[key][i](userData[key]);
            result[key] = validator.getError();

            if (result[key] !== null) {
                break;
            }
        }
    });

    return result as ValidationError;
}

export default validate;
