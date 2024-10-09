import {
    InvalidEmailException,
    InvalidPasswordException,
} from '@common/exceptions';
import { isEmail, isStrongPassword } from '@common/validators';

type AuthConstructorArgs = Record<'email' | 'password', string>;

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
    ) {
    }

    static create(args: AuthConstructorArgs): Auth {

        if (!isEmail(args.email)) {
            throw new InvalidEmailException();
        }

        if (!isStrongPassword(args.password)) {
            throw new InvalidPasswordException();
        }

        return new Auth(
            args.email,
            args.password,
        );
    }
}
