export function isStrongPassword(password: string) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return password.length >= minLength
        && hasNumber.test(password)
        && hasSpecialChar.test(password);
}
