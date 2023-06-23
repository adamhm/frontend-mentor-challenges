import { Validator } from "@validation";

class EmailValidator implements Validator {
    private readonly email: string;

    constructor(email: string) {
        this.email = email;
    }

    isValid(): boolean {
        return /\S+@\S+\.\S+/.test(this.email.trim());
    }

    getError(): string | null {
        return this.isValid() ? null : "Invalid format";
    }
}

export default EmailValidator;
