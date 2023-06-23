import { Validator } from "@validation";

class NotBlankValidator implements Validator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    isValid(): boolean {
        return this.value.trim() !== "";
    }

    getError(): string | null {
        return this.isValid() ? null : "This field is required";
    }
}

export default NotBlankValidator;
