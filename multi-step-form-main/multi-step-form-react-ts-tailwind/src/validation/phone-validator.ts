class PhoneValidator {
    static validate(phone: string) {
        return /^\+\d+$/.test(phone.trim());
    }
}

export default PhoneValidator;
