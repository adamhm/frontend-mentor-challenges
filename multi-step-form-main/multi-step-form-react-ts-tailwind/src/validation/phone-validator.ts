/* class PhoneValidator {
    static validate(phone: string) {
        return /^\+\d+$/.test(phone.trim());
    }
} */

import { Validator } from "@validation";

class PhoneValidator implements Validator {
    private readonly phone: string;

    constructor(phone: string) {
        this.phone = phone;
    }

    isValid(): boolean {
        return /^\+\d+$/.test(this.phone.trim());
    }

    getError(): string | null {
        return this.isValid() ? null : "Invalid format";
    }
}

export default PhoneValidator;
