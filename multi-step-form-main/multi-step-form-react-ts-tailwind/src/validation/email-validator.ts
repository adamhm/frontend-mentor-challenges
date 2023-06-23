class EmailValidator {
    static validate(email: string) {
        return /\S+@\S+\.\S+/.test(email.trim());
    }
}

export default EmailValidator;
