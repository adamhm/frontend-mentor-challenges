class NotBlankValidator {
    static validate(value: string): boolean {
        return value.trim() !== "";
    }
}

export default NotBlankValidator;
