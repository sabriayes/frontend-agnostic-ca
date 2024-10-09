import { AuthException } from '@auth/domain/exceptions/auth.exception';

type AuthProps = Record<'email' | 'password', string>;

export class Auth {
    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    constructor(
        private _email: string,
        private _password: string,
    ) {}

    static create(props: AuthProps): Auth {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(props.email)) {
            throw new AuthException.InvalidEmail(props.email);
        }

        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (
            props.password.length < minLength ||
            !hasNumber.test(props.password) ||
            !hasSpecialChar.test(props.password)
        ) {
            throw new AuthException.InvalidPassword(props.password);
        }

        return new Auth(props.email, props.password);
    }
}
